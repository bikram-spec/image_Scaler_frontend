import { Component, OnInit } from '@angular/core';
import {WebRequestsService } from '../../services/web-requests.service'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {


  constructor(private webreq:WebRequestsService) { }

  ngOnInit(): void {
   /* this.webreq.getinfo().subscribe(
     (res)=>{
       console.log("The response returned is ...",res);
     },
     (err)=>{
       console.log("The function thrown an error ...",err);
     }
   )  */
  }

}
