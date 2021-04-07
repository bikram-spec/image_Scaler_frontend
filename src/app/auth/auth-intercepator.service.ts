import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthIntercepatorService implements HttpInterceptor {
  
  constructor(private token:LocalStorageService,private router:Router) { }

  intercept(req:HttpRequest<any>,next:HttpHandler){

    if(req.headers.get('noauth')){
      return next.handle(req.clone());
    }
    else {
      let clonereq=req.clone({
        headers:req.headers.set('authorization',this.token.getToken("authorization"))
      });
      return next.handle(clonereq).pipe(
        tap(
          res=>{
            console.log(res);
          },
          err=>{
            console.log(err);
            this.router.navigateByUrl('/login');
          }
        )
      )
    }
  }
}
