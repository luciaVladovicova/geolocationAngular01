import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import {LocationService} from '../table-location/location.service';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {HttpClient, HttpParams} from '@angular/common/http';






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



  @ViewChild(MatPaginator) paginator: MatPaginator;



  public displayedColumns = ['display_name', 'lat', 'lon'];
  public dataSource = new MatTableDataSource<Location>();

  dataSource2= new LocationDataSource(this.locationService);
  displayedColumns2:string[] =['display_name', 'lat', 'lon'];

  arrayAddColumn:string[] =[ 'lat', 'lon'];


  columnsToDisplay: string[] = this.displayedColumns2.slice();


  
  constructor(private locationService:LocationService, private http:HttpClient) { }

  ngOnInit() {
  
    this.getAllLocation();
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

  public getAllLocation= () => {
    this.http.get("https://nominatim.openstreetmap.org/search?format=json&limit=5&q=slovensko")
    .subscribe(res => {
      this.dataSource.data = res as Location[];
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
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
