import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';
import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, Validator} from '@angular/forms'

// service importts
import { WebRequestsService } from '../../services/web-requests.service'

// this is the interface for the server datat source
export interface audits
{
  title:string,
  completed:number,
  rejected:number,
  incomplete:number
}

// This will store the info from the response  in it.
let audit_data: audits[] = []

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableItem>;
  searchform=this.fb.group({
    search: null
  })
  example={search:""}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['title', 'completed', 'rejected', 'incomplete'];
  dataSource: MatTableDataSource<audits>;

  
  constructor(private fb:FormBuilder, private request:WebRequestsService){}

  ngOnInit() {
    //this.dataSource = new TableDataSource();
    //this.dataSource= new this.data;
    //console.log(this.dataSource);
    this.request.getaudits().subscribe((res)=>{
      console.log(res);
      audit_data=[];
      // dataSource = new MatTableDataSource<audits>(res);
      Object.values(res).forEach((item)=>{
        console.log(item);
        audit_data.push(item);
      })
      this.dataSource=new MatTableDataSource<audits>(audit_data);
      // this.dataSource=audit_data
    },
    (err)=>{
      console.log(err);
    })
  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    //this.table.dataSource = this.dataSource;
  }
  applyfilter(){
    this.dataSource.filter=this.example.search.trim().toLowerCase();
  }
  clearsearch(){
    this.example.search="";
    this.applyfilter();
  }
}
