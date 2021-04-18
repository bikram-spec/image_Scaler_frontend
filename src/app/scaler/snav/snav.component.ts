import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpHelperService } from '../../services/http-helper.service'

@Component({
  selector: 'app-snav',
  templateUrl: './snav.component.html',
  styleUrls: ['./snav.component.css']
})
export class SnavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  name:string="vikram gauda"


  logout()
  {
    console.log("clicked on the logout button...");
    this.helper.slogout();
  }
  
  constructor(private breakpointObserver: BreakpointObserver,private helper:HttpHelperService) { }

  ngOnInit(): void {
  }

}
