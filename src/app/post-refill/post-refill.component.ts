import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { RefillDetails } from '../refill-details';

@Component({
  selector: 'app-post-refill',
  templateUrl: './post-refill.component.html',
  styleUrls: ['./post-refill.component.css']
})
export class PostRefillComponent implements OnInit {

  subsId;
  policyId;
  location;
  drugName;
  Quantity;

  arr = [];

  constructor(private service:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  doRefill(form){
    this.subsId = form.subsId;
    this.policyId = form.policyId;
    this.location = form.location;
    const res = this.service.requestAdhocRefill(this.subsId,this.policyId,this.location,this.arr,sessionStorage.getItem("token"));
    res.subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl("/dashboard");
    })
  }

  onChangeDrugName(event:Event){
    const target = event.target as HTMLInputElement;
    const val = target.value;
    this.drugName = val;
  }

  onChangeLocation(event:Event){
    const target = event.target as HTMLInputElement;
    const val = target.value;
    this.location = val;
  }

  onChangeQuantity(event:Event){
    const target = event.target as HTMLInputElement;
    const val = target.value;
    this.Quantity = val;
  }

  addDrug(){
    const drugDetails = new RefillDetails();
    drugDetails.drug = this.drugName;
    drugDetails.drugQuantity = this.Quantity;
    this.arr.push(drugDetails);
    console.log(this.arr);
  }

}
