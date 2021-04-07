import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator, Validators} from "@angular/forms";
import { map } from 'rxjs/operators'
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { WebRequestsService } from '../../services/web-requests.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { HttpHelperService } from '../../services/http-helper.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin=this.fb.group({
    email:[null,Validators.compose([Validators.required,Validators.email])],
    password:[null,Validators.compose([Validators.required,Validators.minLength(8)])]
  })
  hide=true;
  submited=false;
  cards=this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) =>{
      if(matches){
        return [
          {cols1:0,rows1:1,cols2:6,rows2:1}
        ];
      }
      return[
        {cols1:2,rows1:1,cols2:2,rows2:1}
      ]
    })
  )


  constructor(private login:HttpHelperService,private fb:FormBuilder,private breakpointObserver:BreakpointObserver,private http:WebRequestsService,private token:LocalStorageService,private router:Router) { }

  ngOnInit(): void {
    if(this.login.isLogedIn()){
      this.router.navigateByUrl('/profile');
    }
  }
  onsubmit(){
    if(this.signin.invalid){
      return;
    }
    else{
      this.submited=true;
      this.http.verifyUser({email:this.signin.value.email,password:this.signin.value.password}).subscribe((Response)=>{
        if(!Response["token"]){
          console.log(Response["message"]);
        }
        else 
        {
          let tdata=Response["token"];
          this.token.setlocalStorage(tdata);
          this.router.navigateByUrl('/dashboard');
        }
      })
    }
  }

}
