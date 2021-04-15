import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * setlocalStorage  */
  public setlocalStorage(token:string) {
    localStorage.setItem("authorization",token);
    return  true; 
  }
  public setSlocalStorage(token:string) {
    localStorage.setItem("sauthorization",token);
    return  true; 
  }
  //delecting the local storage
  /**
   * deletelocalStorage
   */
  public deleteToken(key:string) {
    return localStorage.removeItem(key);    
  }
  /**
   * getlocalStorage
   */
  public getToken(key:string) {
    return localStorage.getItem(key);
  }
}
