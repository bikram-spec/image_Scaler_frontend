import { Component, OnInit } from '@angular/core';
import {WebRequestsService } from '../../services/web-requests.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {


  uri:string;
  token:string;
  trustedDashboardUrl;
  iframeuri;
  
  constructor(private webreq:WebRequestsService,private storage:LocalStorageService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
   /* this.webreq.getinfo().subscribe(
     (res)=>{
       console.log("The response returned is ...",res);
     },
     (err)=>{
       console.log("The function thrown an error ...",err);
     }
   )  */
     
  //  getting the auth token and saniterzing it.
  this.token=this.storage.getToken("sauthorization");
  console.log(this.token);
  this.uri=`http://localhost:3000/engine/editor/${this.token}`;
    this.iframeuri = this.sanitizer.bypassSecurityTrustResourceUrl(this.uri);
     console.log(this.uri);

  }

}
