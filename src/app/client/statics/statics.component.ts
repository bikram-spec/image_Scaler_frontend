import { Component, OnInit } from '@angular/core';
import {WebRequestsService } from '../../services/web-requests.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.css']
})
export class StaticsComponent implements OnInit {

  uri:string;
  token:string;
  trustedDashboardUrl;
  iframeuri;

  constructor(private webreq:WebRequestsService,private storage:LocalStorageService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.token=this.storage.getToken("authorization");
    console.log(this.token);
    this.uri=`http://localhost:3000/engine/cchart/${this.token}`;
    this.iframeuri = this.sanitizer.bypassSecurityTrustResourceUrl(this.uri);
    console.log(this.uri);      

  }

}
