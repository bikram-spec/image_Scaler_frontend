import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import  { Router } from '@angular/router';
import {HttpHelperService } from '../services/http-helper.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SguardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.checker.isSlogedIn()){
        this.Router.navigateByUrl('/scaler/login');
        this.token.deleteToken("sauthorization");
        return false;
      }
      else {
        return true;
      }
  }

  constructor(private checker:HttpHelperService,private Router:Router,private token:LocalStorageService){}
  
}
