import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog} from '@angular/material/dialog';
import { AddProjectDialogComponent} from '../add-project-dialog/add-project-dialog.component';
import { WebRequestsService } from '../../services/web-requests.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})  
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  scard:any
  cols:any;
  rows:any;
  link='dataset-details';
  handler= { width: "100%",title: 'Add Dataset', Dataset_title:'default',cols: 4, rows: 1, color: 'light-blue', number:0, logo_name:'content_copy', link:'/'};
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols:4,rows:1}
        ];
      }

      // { width:"30%",title: 'Add Dataset', type:"default",cols: 1, rows: 1, color: 'light-blue', number:0, logo_name:'content_copy', link:'/' },
      return [
        {cols:1,rows:1}
      ];
    })
  );
  setter=this.cards.subscribe((next)=>{
    next.forEach((value)=>{
      this.cols=value.cols;
      this.rows=value.rows;
    })
  })
  

 // cols=this.cards[0].cols;
  //rows=this.cards[0].rows;

  


    opendialog() {
      const dialogref=this.dialog.open(AddProjectDialogComponent,{width:"30%",height:"80%"});
      dialogref.afterClosed().subscribe(result =>{
        console.log("dialog worked "+result);
        this.projectdetails();
      })
    }

    projectdetails() {
      this.project.projectdetails().subscribe((response)=>{
        console.log(response);
        this.scard=response;
/*         this.cards= this.cards.pipe(map(detailsArray => {
          //console.log(this.scard);
          console.log(typeof response);
          console.log("This is the type of scard:- ",typeof this.scard);
          detailsArray.push(this.scard);
          return detailsArray;
        })) */
        this.scard.unshift(this.handler);
      })
    }



  constructor(private breakpointObserver: BreakpointObserver,public dialog:MatDialog, private project:WebRequestsService) {this.projectdetails()}
}
