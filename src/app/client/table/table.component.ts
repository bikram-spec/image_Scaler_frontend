import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';
import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, Validator} from '@angular/forms'
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',  },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',  },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',  },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',  },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',  },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',  },
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', },
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', },
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableItem>;
  //dataSource: TableDataSource;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  searchform=this.fb.group({
    search: null
  })
  example={search:""}
  
  //listdata:MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //displayedColumns = ['name','position','weight','symbol'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
  constructor(private fb:FormBuilder){}
  //dataSource = ELEMENT_DATA;
  ngOnInit() {
    //this.dataSource = new TableDataSource();
    //this.dataSource= new this.data;
    //console.log(this.dataSource);
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
