import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpHelperService } from '../../services/http-helper.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  name:string="vikram gauda"


  constructor(private breakpointObserver: BreakpointObserver,private helper:HttpHelperService) {}

    logout()
  {
    console.log("clicked on the logout button...");
    this.helper.logout();
  }
}
