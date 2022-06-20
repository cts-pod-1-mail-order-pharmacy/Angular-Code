import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { SubscribedDrugs } from 'src/app/subscribed-drugs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service: AuthenticationService) { }

  subsIds;
  subsData:any[] = [];
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const res = this.service.getAllSubscriptionIds(sessionStorage.getItem("token"),sessionStorage.getItem("uid"));
    res.subscribe((data)=>{
      this.subsIds = data;
      for(let id of this.subsIds){
        this.getSubscribedDrugsDetails(id);
      }
      console.log(this.subsIds);
      console.log(this.subsData);
    })
  }

  getSubscribedDrugsDetails(id){
    const res = this.service.getAllDrugsOfMember(id);
    res.subscribe((data)=>{
      const keys = Object.keys(data);
      const values = Object.values(data);
      for(let i=0; i<keys.length; i++){
        const subsDrug = new SubscribedDrugs();
        if(keys[i] !== undefined && values[i] !==undefined){
          subsDrug.subsId = id;
        subsDrug.drugName = keys[i];
        subsDrug.quantity = values[i];
        this.subsData.push(subsDrug);
      }
      }
    })
  }

}
