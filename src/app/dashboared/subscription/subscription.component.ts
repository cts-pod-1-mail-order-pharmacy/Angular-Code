import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { DrugDetails } from 'src/app/drug-details';
import { Prescription } from 'src/app/prescription';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {


  insurancePolicy;
  insuranceProvider;
  prescriptionDate;

  // inputs
  drugId;
  drugName;
  Quantity;


  location;
  refill;

  dosage;
  course;
  doctor;

  unlocked = false;
  arr = [];
  constructor(private service:AuthenticationService, private router:Router) { 
  }

  ngOnInit(): void {
  }

  doSubscribe(formData){
    const prescription = new Prescription();
    prescription.insurancePolicyNumber = formData.insurancePolicy;
    prescription.insuranceProvider = formData.insuranceProvider;
    prescription.prescriptionDate = formData.prescriptionDate;
    prescription.drugs = this.arr;
    prescription.dosageDefinitionPerDay = formData.dosage;
    prescription.prescriptionCourse = formData.course;
    prescription.doctorDetails = formData.doctor;
    console.log(prescription);
  console.log(typeof(this.refill));
    const res = this.service.doSubscription(this.location,this.refill,prescription,sessionStorage.getItem("token"));
    res.subscribe(data=>{
      console.log(data);
      this.router.navigate(["/dashboard"]);
    });
  }


  onChangeDrugId(event:Event){
    const target = event.target as HTMLInputElement;
    const val = target.value;
    this.drugId = val;
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

  onChangeRefill(event:Event){
    const target = event.target as HTMLInputElement;
    const val = target.value;
    this.refill = val;
  }

  onChangeQuantity(event:Event){
    const target = event.target as HTMLInputElement;
    const val = target.value;
    this.Quantity = val;
  }

  addDrug(){
    const drugDetails = new DrugDetails();
    drugDetails.subscribeDrugId = this.drugId;
    drugDetails.drugName = this.drugName;
    drugDetails.quantity = this.Quantity;
    this.arr.push(drugDetails);
    console.log(this.arr);
  }

}
