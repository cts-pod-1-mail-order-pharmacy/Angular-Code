import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-refill-description',
  templateUrl: './refill-description.component.html',
  styleUrls: ['./refill-description.component.css']
})
export class RefillDescriptionComponent implements OnInit {

  constructor(private service:AuthenticationService, private route:ActivatedRoute, private shared:SharedService) { }

  datafromother;

  getRefillStatusData;

  ngOnInit(): void {
    this.shared.sharedMessage.subscribe(message=>console.log(message));
    this.route.params.subscribe((params)=>{
      this.getrefillStatus(params['id']);
    });
  }

  getrefillStatus(id){
    const res = this.service.getRefillStatus(id, sessionStorage.getItem("token"));
    res.subscribe((data)=>{
      this.getRefillStatusData = data;
      
      console.log(this.getRefillStatusData);
    })
  }


}
