import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username = sessionStorage.getItem("uname")

  details:any = {
    cost:"",
    drugDetails:[],
    expiryDate:"",
    manufacturedDate:"",
    manufacturer:"",
    name:"",
    unitsPackage:"",
  };

  founded = false;

  drugName:string;

  constructor(private service:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }


  getDrugs(drugName:string){
    let resp = drugName.search.toString();
    resp = resp[0].toUpperCase()+resp.substring(1).toLowerCase();
    const res = this.service.getDrugsByName(resp, sessionStorage.getItem("token"));
    res.subscribe((data)=>{
      this.details = data;
      console.log(this.details);
      this.founded = true;
    },
    (error:HttpErrorResponse)=>{
      if(error.status == 404){
        alert("Drug not found");
      }
    }
    )
  }

  logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("uname");
    sessionStorage.removeItem("uid");
    this.router.navigateByUrl("/login");
  }
}
