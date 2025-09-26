import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  dte=new Date();
  db0=this.dte.getMonth();
  dt1=this.dte.getDate();
  dB=this.dte.getDay();
  dt3=this.dte.getHours();
  dt4=this.dte.getMinutes();
  day_arr=new Array('sunday','monday','tuesday','wednesday','thursday','friday','saturday');
  month_arr=new Array('january','february','march','april','may','june','july','august','september','october','november','december')
  dt2=this.day_arr[this.dB];
  dt0=this.month_arr[this.db0];
  APM=this.dt3 >=12 ? 'PM' : 'AM';
  navigate(){
    this.route.navigate(['filemanager'])
    localStorage.setItem('mainheading','Resource manager section')
  }
}
