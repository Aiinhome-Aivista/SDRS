import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { info } from 'console';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-leftsidemenu',
  templateUrl: './leftsidemenu.component.html',
  styleUrls: ['./leftsidemenu.component.css']
})
export class LeftsidemenuComponent implements OnInit {
  mainheading=localStorage.getItem('mainheading');
  John=sessionStorage.getItem('Firstname');
  Doe=sessionStorage.getItem('LastName');
  constructor(private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  userlogout(){
    sessionStorage.clear()
    
    this.route.navigate([''])
    
    this.toastr.info("Successfully logout")
  }
  navigate(){
    //this.route.navigate(['filemanager'])
    localStorage.setItem('mainheading','Resource manager section')
  }
  navigate1(){
    // this.route.navigate(['Uploadfile'])
    localStorage.setItem('mainheading','Resource manager section')
  } 
  navigate2(){
    this.route.navigate(['editpage'])
    localStorage.setItem('mainheading','Resource manager section')
  } 
  userdash(){
    this.route.navigate(['userdashboard'])
    localStorage.setItem('mainheading','User Section')
  }
}
