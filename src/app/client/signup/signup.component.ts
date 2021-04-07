import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import {Breakpoints,BreakpointObserver} from '@angular/cdk/layout'
import {map} from 'rxjs/operators';
import {WebRequestsService } from '../../services/web-requests.service';
import {LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = this.fb.group({
    institue_name: [null,Validators.required],
    email: [null, Validators.compose([Validators.required,Validators.email])],
    password: [null, Validators.compose([Validators.required,Validators.minLength(8)])],
    confirm_password: [null, Validators.compose([
      Validators.required, Validators.minLength(8)])
    ]
  });
  hide=true;
  submited=false;
  cards=this.breakpointobserver.observe(Breakpoints.Handset).pipe(
    map(({matches})=>{
      if(matches){
        return [
          {cols1:0,rows1:1,cols2:6,rows2:1}
        ];
      }
      return [
        {cols1:2,rows1:1,cols2:2,rows2:1}
      ]
    })
  )
  constructor(private fb:FormBuilder,private signupRequest:WebRequestsService, private breakpointobserver:BreakpointObserver, private token:LocalStorageService,private router:Router ){ }

  ngOnInit(): void {
  }
  onclear(){
    this.signup.value.institue_name="";
    this.signup.value.email="";
    this.signup.value.password="";
    this.signup.value.confirm_password="";
  }
  onSubmit(){
    this.submited = true;
    if (this.signup.value.password !== this.signup.value.confirm_password) {
      this.signup.controls.confirm_password.setErrors({ mustMatch: true });
  } else {
    this.signup.controls.confirm_password.setErrors(null);
  }
        // stop here if form is invalid
        if (this.signup.invalid) {
            return;
        }
        else{
          console.log(this.signup.value.institue_name,this.signup.value.email,this.signup.value.password);
          this.signupRequest.newUser({"company_name":this.signup.value.institue_name,"email":this.signup.value.email,"password":this.signup.value.password}).subscribe((response)=>{
            let tdata=response["token"];
            this.token.setlocalStorage(tdata)
            this.router.navigateByUrl('/dashboard');
          })
        }

    
  }

}
