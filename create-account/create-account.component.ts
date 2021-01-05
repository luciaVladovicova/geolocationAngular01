import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, } from '@angular/forms';
import {NgForm} from '@angular/forms';
import {FormDataService} from "./form-data.service"

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  frmBasicReg : FormGroup;
  frmAdress:FormGroup;

    constructor(private _fb: FormBuilder, private dataservice: FormDataService) {}  
    
    ngOnInit(): void {  
        this.frmBasicReg = this._fb.group({  
            regUserName: "",  
            regEmail: ""  ,
            regPassword:"",
            regName:" ",
            regSurname:"",
            regStreet: "",  
            regPostalCode: ""  ,
            regCity:"",
        });
    
    }  
    SaveRegistration(value) {  
        this.dataservice.SaveRegister(value);  

       
    }  
}