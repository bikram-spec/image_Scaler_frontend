// pre-Build Modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';


// component imports 
import { AppComponent } from './app.component';
import { NavComponent } from './client/nav/nav.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { TableComponent } from './client/table/table.component';
import { FormComponent } from './client/form/form.component';
import { SignupComponent } from './client/signup/signup.component';
import { SigninComponent } from './client/signin/signin.component';
import { ProfileComponent } from './client/profile/profile.component'
import { NotfoundComponent } from './client/notfound/notfound.component';
import { HomeComponent } from './client/home/home.component'
import { AddProjectDialogComponent } from './client/add-project-dialog/add-project-dialog.component';
import { StaticsComponent } from './client/statics/statics.component';
import { FeedbackComponent } from './client/feedback/feedback.component';
import {  HelpComponent } from './client/help/help.component';
import { DatasetDetailsComponent } from './client/dataset-details/dataset-details.component';

// scaler component imports 
import { EditorComponent } from './scaler/editor/editor.component';
import { SloginComponent } from './scaler/slogin/slogin.component';
import { SsignupComponent } from './scaler/ssignup/ssignup.component';

// Services imports 
import { HttpRequestService } from '../app/services/http-request.service'
import { WebRequestsService } from '../app/services/web-requests.service'
import { LocalStorageService } from '../app/services/local-storage.service';
import { HttpHelperService  } from '../app/services/http-helper.service';

// auth gurad and intercepator
import { AuthGuard } from '../app/auth/auth.guard';
import { HttpInterceptor,HTTP_INTERCEPTORS,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { ScaledImgComponent } from './client/scaled-img/scaled-img.component';



// definening constants


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TableComponent,
    FormComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    NotfoundComponent,
    HomeComponent,
    AddProjectDialogComponent,
    DatasetDetailsComponent,
    StaticsComponent,
    FeedbackComponent,
    HelpComponent,
    // scaler component 
    EditorComponent,
    SloginComponent,
    SsignupComponent,
    ScaledImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
