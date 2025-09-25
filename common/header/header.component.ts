import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainheading;
  userName : any;
  constructor(private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log("router",this.route.url)
    this.userName = sessionStorage.getItem("Firstname"); 
    if(this.route.url=="/admindashboard"){
      
      this.mainheading='Admin Section';
    }
    else if(this.route.url=="/userdashboard"){
   
      this.mainheading='User Section';
    }
    else{
      this.mainheading='Resource manager Section';
    }

  }
  dte=new Date();
  db0=this.dte.getMonth();
  dt1=this.dte.getDate();
  dB=this.dte.getDay();
  dt3=this.dte.getHours();
  dt4=(this.dte.getMinutes()<10?'0':'')+ this.dte.getMinutes();
  day_arr=new Array('sunday','monday','tuesday','wednesday','thursday','friday','saturday');
  month_arr=new Array('january','february','march','april','may','june','july','august','september','october','november','december')
  dt2=this.day_arr[this.dB];
  dt0=this.month_arr[this.db0];
  APM=this.dt3 >=12 ? 'PM' : 'AM';
  
  backtohome(){
    this.route.navigate(['admindashboard'])
    localStorage.setItem('mainheading','Admin Section')
  }
  logout(){
    let userid = sessionStorage.getItem("userid"); 
    console.log(userid);
    if(userid !=""){
      sessionStorage.clear();
      this.route.navigate(['/']);
      this.toastr.info("Successfully logout")
    }    
  }
 
}
