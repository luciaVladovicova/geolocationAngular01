import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http:HttpClient) { }
 clickCount:number =0;
 
  ngOnInit(): void {

    this.loadMap();
 
  }



  items=[];
mymap:any;

  mesto:string;
  


  loadMap(){

    if(!navigator.geolocation){
      console.log('location is not suported');
    }
    if (navigator.geolocation) {
  
      navigator.geolocation.getCurrentPosition((position)=> {
      const coords=position.coords;
      const lat =coords.latitude;
      const lng = coords.longitude;
         
        console.log(`lat: ${ lat} , lng: ${lng}` );
  
      let mymap=  L.map('map').setView([lat, lng],13);
  
   
  
  // Set up the OSM layer
  L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  ).addTo(mymap);
  
  
  //marker postion
  
  let circle = L.circle([coords.latitude, coords.longitude], {
    color: 'blue',
    fillColor: '#025FA7',
    fillOpacity: 0.5,
    radius: 300
  }).addTo(mymap);
   
      })
  
  
    
  
      
    }
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  } 


  searchLocation(vstup){
   
    //destroy div, create div, and 

var destroyOldMap = document.getElementById("map");
destroyOldMap.parentNode.removeChild(destroyOldMap);
 
var newDiv = document.createElement("div");
    newDiv.style.height="500px";


var node=document.createTextNode("xxx");
    newDiv.appendChild(node);

var element = document.getElementById("drawMap");
    newDiv.setAttribute("id", "map");
    newDiv.nodeValue="map";
    element.appendChild(newDiv);
   
  
    console.log(vstup);
  
    this.http.get('http://nominatim.openstreetmap.org/search?format=json&limit=5&q='+vstup).subscribe(
      data =>{
        this.items=data as string[];
        
        this.items.push(data);
  
          console.log(data);
          
  
      console.log(data[0].lon);
  
      let JsonData=data[0];
      
     
  
          
    /// set seached location
    if(JsonData==data[0]){
  
      
      var longitude=data[0].lon;
    var latitude =data[0].lat;
     
  
    console.log(longitude,latitude);
  
    var mymap= L.map('map').setView([latitude, longitude],13);
  
  
   
   
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      ).addTo(mymap);
      
  
   
    
    var miesto = new L.LatLng(latitude, longitude);
   mymap.panTo(miesto);
    
    var circle = L.circle([latitude, longitude], {
      color: 'blue',
      fillColor: '#025FA7',
      fillOpacity: 0.5,
      radius: 300
  }).addTo(mymap);
  
  
  
  
    }
  
   
      
  
    
  
  
        }
  
    )
    
  
  }
  
  nextPlace(){
    
    location.reload();
    
   }


}

