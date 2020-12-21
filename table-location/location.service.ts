import { Injectable, ViewChild } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Location} from '../models/location';
import { MatPaginator } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private serviceUrl='https://nominatim.openstreetmap.org/search?format=json&limit=5&q=slovensko';

  

  constructor(private http:HttpClient) { }


@ViewChild(MatPaginator) paginator:MatPaginator;

  getLocation():Observable<Location[]>{


    return this.http.get<Location[]>(this.serviceUrl);
  }
}
