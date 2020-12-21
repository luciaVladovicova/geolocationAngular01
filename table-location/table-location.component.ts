import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import {LocationService} from '../table-location/location.service';
import {DataSource} from '@angular/cdk/collections';
//import {Location} from '../models/location';

import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';




export interface Location{
   
  display_name:string;
  lat: string;
  lon:string;


}





@Component({
  selector: 'app-table-location',
  templateUrl: './table-location.component.html',
  styleUrls: ['./table-location.component.css']
})


export class TableLocationComponent implements OnInit {


  @ViewChild(MatPaginator) paginator:MatPaginator;
  //dataSource= new MatTableDataSource<any>();

  dataSource= new LocationDataSource(this.locationService);
  displayedColumns:string[] =['display_name', 'lat', 'lon'];

  dataSource2= new LocationDataSource(this.locationService);
  displayedColumns2:string[] =['display_name', 'lat', 'lon'];

  arrayAddColumn:string[] =[ 'lat', 'lon'];


 




  columnsToDisplay: string[] = this.displayedColumns2.slice();
  
  constructor(private locationService:LocationService) { }

  ngOnInit() {
    
   
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() *this.arrayAddColumn.length);
    this.columnsToDisplay.push(this.arrayAddColumn[randomColumn]);
  }


  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

}

export class LocationDataSource extends DataSource<any>{
  constructor(private locationService:LocationService){
    super();
  }

  connect():Observable<Location[]>{
    return this.locationService.getLocation();
  }

  disconnect() {}


}
