import { Component, OnInit } from '@angular/core';
import {  WebRequestsService } from '../../services/web-requests.service'

@Component({
  selector: 'app-sdashboard',
  templateUrl: './sdashboard.component.html',
  styleUrls: ['./sdashboard.component.css']
})
export class SdashboardComponent implements OnInit {
  projectdone:number=0;

  constructor(private srequest:WebRequestsService) { }

  ngOnInit(): void {
    this.srequest.getprojectdone().subscribe(
      (res)=>{
        console.log(res["task_completed"]);
        this.projectdone=res["task_completed"];
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
