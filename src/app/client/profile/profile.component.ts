import { Component, OnInit } from '@angular/core';
import { HttpHelperService  } from '../../services/http-helper.service';
import { WebRequestsService } from '../../services/web-requests.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private checker:HttpHelperService, private request:WebRequestsService) { 
  }

  ngOnInit(): void {
    this.request.userprofile().subscribe((Response)=>{
      console.log(Response)
    },
    (error)=>{
      console.log(error);
    })
  }


}
