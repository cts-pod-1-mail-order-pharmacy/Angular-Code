import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest:any={
    "userid":"",
    "uname":"",
    "upassword":""
  };

  isTokenGenerated = true;

  response: any={};

  constructor(private service: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  public constructRequest(userid, username, password){
    this.authRequest.userid = userid;
    this.authRequest.uname = username;
    this.authRequest.upassword = password;
  }

  public onSubmit(userid, username, password){
    this.constructRequest(userid, username, password);
    console.log(this.authRequest);
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest){
    let resp=this.service.generateToken(authRequest);
    console.log(resp);
    resp.subscribe((data)=>{
      this.response=data;
      console.log(this.response);
      sessionStorage.setItem("uid",this.response.userid);
      sessionStorage.setItem("token", this.response.authToken);
      sessionStorage.setItem("uname",authRequest.uname)
      this.router.navigate(["/dashboard"])
    },
    (error:HttpErrorResponse)=>{
      if(error.status == 403){
        this.isTokenGenerated = false;
      }
    });
  }

}
