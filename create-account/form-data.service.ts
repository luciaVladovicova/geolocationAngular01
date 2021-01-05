import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  public SaveRegister( regdata) {  
    console.log(" Username : " + regdata.regUserName);  
    console.log("Email : " + regdata.regEmail);  
    console.log("Password : " + regdata.regPassword);  
    console.log(" Name : " + regdata.regName);  
    console.log("Sunrame : " + regdata.regSurname);  
    console.log("Adress : " + regdata.regStreet); 
    console.log("Postalcode : " + regdata.regPostalCode);  
    console.log("City : " + regdata.regCity);
   
 }  
}
