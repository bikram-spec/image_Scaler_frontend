import { Component, OnInit } from '@angular/core';
import {WebRequestsService } from '../../services/web-requests.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-ceditor',
  templateUrl: './ceditor.component.html',
  styleUrls: ['./ceditor.component.css']
})
export class CeditorComponent implements OnInit {

  // variables
  uri:string;
  token:string;
  trustedDashboardUrl;
  iframeuri;

  constructor(
    private webreq:WebRequestsService,
    private storage:LocalStorageService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // ccreating and sanetizing the url of iframe
    this.token=this.storage.getToken("sauthorization");
    console.log(this.token);
    this.uri=`http://localhost:3000/engine/ceditor/${this.token}`;
    this.iframeuri = this.sanitizer.bypassSecurityTrustResourceUrl(this.uri);
    console.log(this.uri);
  }

}
