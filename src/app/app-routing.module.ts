import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './client/nav/nav.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { FormComponent } from './client/form/form.component';
import { SigninComponent } from './client/signin/signin.component';
import { SignupComponent } from './client/signup/signup.component';
import { ProfileComponent } from '../app/client/profile/profile.component';
import { NotfoundComponent } from '../app/client/notfound/notfound.component';
import { HomeComponent } from '../app/client/home/home.component'
import { DatasetDetailsComponent } from './client/dataset-details/dataset-details.component';
import { StaticsComponent } from '../app/client/statics/statics.component';
import { AuditComponent } from '../app/client/audit/audit.component'
import { FeedbackComponent } from '../app/client/feedback/feedback.component'

// Imports for the Scaler component 
import { EditorComponent } from "../app/scaler/editor/editor.component";
import { CeditorComponent } from "../app/scaler/ceditor/ceditor.component"
import { SloginComponent} from "../app/scaler/slogin/slogin.component";
import { SsignupComponent  } from '../app/scaler/ssignup/ssignup.component'
import { SdashboardComponent }  from  '../app/scaler/sdashboard/sdashboard.component'
import { SnavComponent } from '../app/scaler/snav/snav.component'
// auth guard import

import { AuthGuard } from '../app/auth/auth.guard';
import { SguardGuard } from '../app/auth/sguard.guard'
import { TableComponent } from './client/table/table.component';


const routes: Routes = [
  // Routes for the client method 
  {path:"home",component: HomeComponent},
  {path:"404",component:NotfoundComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'profile',component:ProfileComponent,canActivate:[ AuthGuard]},
  {path:'dashboard', component:NavComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'dataset-details/:title',component:DatasetDetailsComponent},
  ],canActivate:[ AuthGuard]},
  {path:'statics', component:NavComponent,children:[
    {path:'', component:StaticsComponent},
    {path:'form',component:FormComponent}
  ],canActivate:[ AuthGuard]},
  {path:'audit', component:NavComponent,children:[
    {path:'',component:AuditComponent},
  ],canActivate:[ AuthGuard]},
  // {path:'questions', component:NavComponent,children:[
  //   {path:'',component:QuestionsComponent},
  // ],canActivate:[ AuthGuard]},
  {path:'feedback', component:NavComponent,children:[
    {path:'',component:FeedbackComponent},
  ],canActivate:[ AuthGuard]},
  {path:"test",component:NavComponent,children:[
    {path:'',component:EditorComponent}
  ]},
  // Routes for the scalers editor 
  {path:"scaler/editor",component:EditorComponent,canActivate:[ SguardGuard ]},
  {path:"scaler/ceditor",component:CeditorComponent,canActivate:[ SguardGuard ]},
  {path:'scaler/login',component:SloginComponent},
  {path:'scaler/signup',component:SsignupComponent},
  {path:"scaler/dashboard",component:SnavComponent,children:[
    {path:'',component:SdashboardComponent}
  ],canActivate:[ SguardGuard ]},
  // Routes for the error handeling 
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
