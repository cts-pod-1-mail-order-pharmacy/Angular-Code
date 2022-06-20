import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { RefillOrder } from '../refill-order';
import { RefillStatusClass } from '../refill-status-class';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-refill-status',
  templateUrl: './refill-status.component.html',
  styleUrls: ['./refill-status.component.css']
})
export class RefillStatusComponent implements OnInit {

  subsIds;
  state;
  data;

  getRefillStatusData:any[] = [];
  getRefillStatusDataJson:any[] = [];
  constructor(private service:AuthenticationService, private router:Router, private shared:SharedService) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    const res = this.service.getAllSubscriptionIds(sessionStorage.getItem("token"),sessionStorage.getItem("uid"));
    res.subscribe((data)=>{
      console.log(data);
      this.subsIds = data;
      for(let id of this.subsIds){
        this.getrefillStatus(id);
      }
    });
    console.log(this.getRefillStatusData);
    this.shared.nextMessage(this.getRefillStatusData);
  }

  getrefillStatus(id){
    const res = this.service.getRefillStatus(id, sessionStorage.getItem("token"));
    res.subscribe((data)=>{
      //console.log(data);
      this.data = data;
      console.log(this.data);
      for(let i of this.data){
        this.getRefillStatusData.push(i);
      }
      //console.log(this.getRefillStatusData);
      /*
      if(this.state.status){
        this.state = "cleared";
      }
      else{
        this.state = "Pending";
      }*/
    })
  }

}

// {subsId, status, view}
// clickable - view
//for each id 
//  subsId = id, 
//  refill = get(subsId)
//  if(refill.status = true)
//    make button clickable