import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {
 

  constructor( private router:Router) { }
  username:string;
  password:string;
  hide = true;

  ngOnInit(): void {
  }
  

  LogUser(){
    if(this.username=="Lucia" && this.password=="admin"){
           console.log(this.username, this.password);
           this.router.navigate(['search/']);

    } else
     alert("Username or passsword is incorect.");

  }

}
