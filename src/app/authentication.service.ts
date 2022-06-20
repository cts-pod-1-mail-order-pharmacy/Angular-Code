import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Prescription } from './prescription';
export class User{
  constructor(public status:string){}
}
export class JwtResponse{
  constructor(public jwttoken:string){}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  
  public generateToken(request:any){
    return this.httpClient.post("http://authenticate.us-east-1.elasticbeanstalk.com/api/login",request);
  }

  public giveHeaders(token){
    let tokenStr = 'Bearer '+token;
    const headers = new HttpHeaders().set("Authorization",tokenStr);
    return headers;
  }

  public register(data:any){
    return this.httpClient.post("http://authenticate.us-east-1.elasticbeanstalk.com/api/register", data);
  }

  public getDrugsByName(name:string, token){
    const headers = this.giveHeaders(token);
    return this.httpClient.get("http://drugsservice.us-east-1.elasticbeanstalk.com/drugs/searchDrugsByName/"+name,{headers})
  }

  public doSubscription(location, refill, prescreption, token){
    const headers = this.giveHeaders(token);
    const url = "http://subscribeme.us-east-1.elasticbeanstalk.com/subscription/subscribe/"+location+"/"+refill;
    return this.httpClient.post(url,prescreption,{headers:headers, responseType: 'text'});
  }

  public getAllSubscriptionIds(token,memberId){
    const headers = this.giveHeaders(token);
    const url = "http://subscribeme.us-east-1.elasticbeanstalk.com/subscription/getAllSubscriptions/"+memberId;
    return this.httpClient.get(url, {headers});
  }

  public getAllDrugsOfMember(subsid){
    const url = "http://subscribeme.us-east-1.elasticbeanstalk.com/subscription/getAllDrugs/"+subsid;
    return this.httpClient.get(url);
  }

  public getRefillStatus(subsid, token){
    const headers = this.giveHeaders(token);
    const url = "http://refillservice.us-east-1.elasticbeanstalk.com/refill/viewRefillStatusAll/"+subsid;
    return this.httpClient.get(url, {headers});
  }

  public requestAdhocRefill(subsid, policyid, location, prescriptions, token){
    const headers = this.giveHeaders(token);
    const url = "http://refillservice.us-east-1.elasticbeanstalk.com/refill/requestAdhocRefill?Subscription_ID="+subsid+"&Policy_ID="+policyid+"&Location="+location;
    return this.httpClient.post(url,prescriptions,{headers});
  }
  
}
