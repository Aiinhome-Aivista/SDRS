import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {Service_authorization} from '../service/authservice';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin:UntypedFormGroup;
  email;
  loaditem:boolean;
  password;
  mainheading;
  SUBS:Subscription;
  constructor( private form:UntypedFormBuilder,private _Autherize:Service_authorization,private route:Router,private toastr:ToastrService) {
  
   }

  ngOnInit(): void {
    this.userlogin=this.form.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  ngOnDestroy(){
    this.SUBS.unsubscribe();
  }  
  onFormSubmit(){}
  Userlogin(){
    
    console.log("Formvalue", this.email, this.password)
    var user_details={
      "username":this.email,
      "password":this.password
    }
    this.loaditem=true;
    this.toastr.info("Wait please...",'',{timeOut:4000})
   this.SUBS= this._Autherize.logindetail(user_details).subscribe(details=>
      {
        console.log("API data", details.data.username);
        if(details.data.username==this.email){
          sessionStorage.setItem('Email',details.data.username)
          sessionStorage.setItem('Firstname',details.data.fname)
          sessionStorage.setItem('Lastname',details.data.lname)
          sessionStorage.setItem('Status',details.status)
          sessionStorage.setItem('userid',details.data.id)
          this.toastr.success(details.Message,'Welcome!!!')
          this.route.navigate(['/admindashboard'])
          this.mainheading=localStorage.setItem('mainheading',"Admin Section");
          
        }
        else{
          this.toastr.error("Invalid Credential",'Error')
        }
        this.loaditem=false;
      }

    )


  }
 
    
  
}
