import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reqBody = {
    userid:"",
    uname:"",
    upassword:""
  }

  constructor(private service:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(userid, uname, upassword){
    this.reqBody.userid = userid;
    this.reqBody.uname = uname;
    this.reqBody.upassword = upassword;

    let res = this.service.register(this.reqBody);
    res.subscribe((data)=>{
      this.router.navigate(["/login"])
    })
  }

}
