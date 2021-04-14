import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpRequestService} from '../services/http-request.service';
import { LocalStorageService } from '../services/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class WebRequestsService {

  constructor(private request:HttpRequestService, private token:LocalStorageService) {   }

  authheader={ headers: new HttpHeaders({"authorization": `${this.token.getToken("authorization")}`})}
  noauth= { headers: new HttpHeaders({"noauth":"true"})}
  // client methods...
  newUser(data:Object){
      return this.request.post("signup",data,this.noauth);
  }

  verifyUser(data:object){
    return this.request.post("signin",data,this.noauth);
  }
  
  userprofile(){
    return this.request.pget("userprofile");
  }

  adddataset(details:Object){
    return this.request.ppost('addDatasetName',details)
  }

  projectdetails(){
    return this.request.pget("projectdetails");
  }

  addimages(pname:string,payload:Object)
  {
    return this.request.imgpost("uploadDatasets",pname,payload);
  }
  listimages(pname:string)
  {
    return this.request.imgget("getdata",pname);
  }
  /* list scaled images */
  listscaledimages(pname:string)
  {
    return this.request.imgget("getScaleddata",pname);
  }

  // Scaler helper methods ....
  getinfo()
  {
    return this.request.get("scaler/editor",this.noauth);
  }

  getaudits()
  {
    return this.request.pget("getaudits");
  }
  //scaler methods
  newSuser(data:Object){
    return this.request.spost("signup",data,this.noauth);
  }
  verifySuser(data:object){
    return this.request.spost("signin",data,this.noauth);
  }
}
