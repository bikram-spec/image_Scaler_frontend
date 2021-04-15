import { Injectable } from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private token:LocalStorageService,private router:Router) { }
  
  // client login checker
  isLogedIn():boolean{
    let payload=this.token.getToken("authorization");
    if (!payload){
      return false
    }
    else
    {
      let data=payload.split('.')[1];
      let user=JSON.parse(window.atob(data));
      if(user.exp > Date.now()/1000){
        return true;
      }
      else
      {
        return false;
      }
    }  
  }

  // SCaler login checker
  isSlogedIn():boolean{
    let payload=this.token.getToken("sauthorization");
    if (!payload){
      return false
    }
    else
    {
      let data=payload.split('.')[1];
      let user=JSON.parse(window.atob(data));
      if(user.exp > Date.now()/1000){
        return true;
      }
      else
      {
        return false;
      }
    }  
  }
  // scaler login ends here

  // logouut 
  logout()
  {
    this.token.deleteToken("authorization");
    this.router.navigateByUrl('/home');
  }

}
