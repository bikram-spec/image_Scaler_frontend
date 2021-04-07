import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service'


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  readonly rooturl;
  readonly srooturl;

  constructor(private http:HttpClient,private token:LocalStorageService) { 
    this.rooturl="http://localhost:3000/api";
    this.srooturl="http://localhost:3000/scaler"

  }

  // client request 
  get(uri:String,header:object){
    return this.http.get(`${this.rooturl}/${uri}`,header);
  }
  post(uri:String,payload:Object,header:object)
  {
    return this.http.post(`${this.rooturl}/${uri}`,payload);
  }
  pget(uri:string){
    let authheader= { headers : new HttpHeaders({"authorization":` Bearer ${this.token.getToken("authorization")}`})}
    return this.http.get(`${this.rooturl}/${uri}`,authheader);
  }
  ppost(uri:string,payload:Object)
  {
    let authheader= { headers : new HttpHeaders({"authorization":` Bearer ${this.token.getToken("authorization")}`})}
    return this.http.post(`${this.rooturl}/${uri}`,payload,authheader);
  }
  imgpost(uri:string,pname:string,payload:Object)
  {
    let authheader= { headers : new HttpHeaders({"authorization":` Bearer ${this.token.getToken("authorization")}`,"dataset_name":pname})}
    return this.http.post(`${this.rooturl}/${uri}`,payload,authheader);
  }
  imgget(uri:string,pname:string)
  {
    let authheader= { headers : new HttpHeaders({"dataset_name":pname,"authorization":` Bearer ${this.token.getToken("authorization")}`})}
    return this.http.get(`${this.rooturl}/${uri}`,authheader);
  }

  //scaler requests 
  sget(uri:String,header:object){
    return this.http.get(`${this.srooturl}/${uri}`,header);
  }
  spost(uri:String,payload:Object,header:object)
  {
    return this.http.post(`${this.srooturl}/${uri}`,payload);
  }
}
