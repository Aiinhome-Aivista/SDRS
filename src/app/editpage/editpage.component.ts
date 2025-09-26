import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {Service_authorization} from '../service/authservice';

// import { from } from 'rxjs';
// import { table } from 'console';
// import { element } from 'protractor';
// import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

college='';
contact='';
degree='';
dsgn2='';
comp2='';
dsgn3='';
compn3='';
inst4='';
yop1='';
yop2:string='';
yop3='';
yop4=''
deg4='';
compn4='';
comp5='';
comp6='';
dsgn4='';
dsgn5='';
dsgn6='';
skl1='';
skl2='';
skl3='';
skl4='';
skl5='';
skl6='';
inst1='';
deg2='';
inst2='';
deg3='';
inst3='';
name=''
deg1=''

location=''
dsgn1=''
comp1=''
ResumeTableData;
body;
sendEditeddata;
details:UntypedFormGroup;
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
mainheading:string="Resource manager section";
array_name=[]; 

array_designation=[];
array_skill=[];
array_company=[];
array_degree=[];
array_gradyear=[];
array_unnamed=[];
array_college=[];
array_location=[];
uploadedfilename;
blobID;
isRead;
constructor(private route:Router,private toast:ToastrService,private form:UntypedFormBuilder, private _authorizationApi:Service_authorization) { }

 ngOnInit(): void {
this.uploadedfilename=sessionStorage.getItem("filename")
this.blobID=sessionStorage.getItem('blobid')
this.isRead=sessionStorage.getItem('isRead')
  //   this._authorizationApi.getResumeList().subscribe(data=>{
  //     this.ResumeTableData=JSON.parse(data)
  //     console.log('dd',this.ResumeTableData)
  // })
 
  // this.setvalue()
 this.getuserdetails()
}

//to get user biodata
getuserdetails(){
  var fileName= {
    "blobName":this.uploadedfilename
  }

this._authorizationApi.posteditedResume(fileName).subscribe(data=>{
    // this.sendEditeddata=JSON.parse(data)
    console.log('findediteddata',data)
    this.array_name=data.name;
    this.array_location=data.location;
    this.array_company=data.company;
    this.array_degree=data.degree;
    this.array_designation=data.designation;
    this.array_gradyear=data.graduationYear;
    this.array_college=data.collegeName;
    this.array_skill=data.skills;
    
  if(this.array_location[0]!=undefined){
    this.location=this.array_location[0];
  }
  if(this.array_name[0]!=undefined){
    this.name=this.array_name[0];
  }
    
  
   Object.keys( this.array_company).forEach((element,index) => {
      if(index==0)
      {
        this.comp1=this.array_company[0];
      }
      else if (index==1)
      {
        this.comp2=this.array_company[1];
      }
     

       else if (index==2)
      {
             
      this.compn3=this.array_company[2];
      }
      else if (index==3)
      {
             
      this.compn4=this.array_company[3];
      }
      else if (index==4)
      {
             
      this.comp5=this.array_company[4];
      }
      else if (index==5)
      {
             
      this.comp6=this.array_company[5];
      }
     
     
    });
    
   Object.keys( this.array_skill).forEach((element,index) => {
      if(index==0)
      {
        this.skl1=this.array_skill[0];
      }
      else if (index==1)
      {
        this.skl2=this.array_skill[1];
      }
     

       else if (index==2)
      {
             
      this.skl3=this.array_skill[2];
      }
      else if (index==3)
      {
             
      this.skl4=this.array_skill[3];
      }
      else if (index==4)
      {
             
      this.skl5=this.array_skill[4];
      }
      else if (index==5)
      {
             
      this.skl6=this.array_skill[5];
      }
     
     
    });
  
   Object.keys( this.array_designation).forEach((element,index) => {
      if(index==0)
      {
        this.dsgn1=this.array_designation[0];
      }
      else if (index==1)
      {
        this.dsgn2=this.array_designation[1];
      }
     

       else if (index==2)
      {
             
      this.dsgn3=this.array_designation[2];
      }
      else if (index==3)
      {
             
      this.dsgn4=this.array_designation[3];
      }
      else if (index==4)
      {
             
      this.dsgn5=this.array_designation[4];
      }
      else if (index==5)
      {
             
      this.dsgn6=this.array_designation[5];
      }
     
     
    });
   
   Object.keys( this.array_gradyear).forEach((element,index) => {
      if(index==0)
      {
        this.yop1=this.array_gradyear[0];
      }
      else if (index==1)
      {
        this.yop2=this.array_gradyear[1];
      }
     

       else if (index==2)
      {
             
      this.yop3=this.array_gradyear[2];
      }
      else if (index==3)
      {
             
      this.yop4=this.array_gradyear[3];
      }
     
     
     
    });
   
   Object.keys( this.array_designation).forEach((element,index) => {
      if(index==0)
      {
        this.dsgn1=this.array_designation[0];
      }
      else if (index==1)
      {
        this.dsgn2=this.array_designation[1];
      }
     

       else if (index==2)
      {
             
      this.dsgn3=this.array_designation[2];
      }
      else if (index==3)
      {
             
      this.dsgn4=this.array_designation[3];
      }
      else if (index==4)
      {
             
      this.dsgn5=this.array_designation[4];
      }
      else if (index==5)
      {
             
      this.dsgn6=this.array_designation[5];
      }
     
     
    });
   
    Object.keys( this.array_degree).forEach((element,index) => {
      if(index==0)
      {
        this.deg1=this.array_degree[0];
      }
      else if (index==1)
      {
        this.deg2=this.array_degree[1];
      }
     

       else if (index==2)
      {
             
      this.deg3=this.array_degree[2];
      }
      else if (index==3)
      {
             
      this.deg4=this.array_degree[3];
      }
      
     
     
    });
   
    Object.keys( this.array_college).forEach((element,index) => {
      if(index==0)
      {
        this.inst1=this.array_college[0];
      }
      else if (index==1)
      {
        this.inst2=this.array_college[1];
      }
     

       else if (index==2)
      {
             
      this.inst3=this.array_college[2];
      }
      else if (index==3)
      {
             
      this.inst4=this.array_college[3];
      }
   
     
    });
   
    
})
}

//start of swap values of the fields  
  swapvalue1(n,a){
   
   this.name=a;
   this.location=n;
   }
   swap_pdetail1(name,contact){
     this.name=contact
     this.contact=name;
   }
   
    swapdes_comp1(d1,c1){
      this.dsgn1=c1;
      this.comp1=d1
    }
    swapdes_comp2(d2,c2){
      this.dsgn2=c2;
      this.comp2=d2;
    }
    swapdes_comp3(d3,c3){
      this.dsgn3=c3;
      this.compn3=d3;
    }
    swapdes_comp4(d4,c4){
      this.dsgn4=c4;
      this.compn4=d4;
    }
    swapdes_comp5(d5,c5 ){
      this.dsgn5=c5;
      this.comp5=d5;
    }
    swapdeg4a(inst4,yop4){
      this.inst4=yop4;
      this.yop4=inst4;
    }
    swapdeg3a(inst3,yop3){
      this.inst3=yop3;
      this.yop3=inst3;
    }
    swapupinst3(inst3,inst4){
      this.inst3=inst4;
      this.inst4=inst3;
    }
    swapdes_comp6(d6,c6){
      this.dsgn6=c6;
      this.comp6=d6;
    }
    swapup1(d1,d2){
        this.dsgn1=d2;
        this.dsgn2=d1
    }
    swapup2(c1,c2){
      this.comp1=c2;
      this.comp2=c1;
  }
  swapup3(d2,d3){
    this.dsgn3=d2;
    this.dsgn2=d3
}
swapup5(dsgn3,dsgn4){
  this.dsgn3=dsgn4
  this.dsgn4=dsgn3
}
swapup7(dsgn4,dsgn5){
  this.dsgn4=dsgn5;
  this.dsgn5=dsgn4;
}
swapup9(dsgn5,dsgn6){
  this.dsgn5=dsgn6;
  this.dsgn6=dsgn5;
}

swapup4(c2,c3){
  this.compn3=c2;
  this.comp2=c3;
}
swapup6(comp3,comp4){
  this.compn3=comp4;
  this.compn4=comp3;
}
swapup8(comp4,comp5){
  this.compn4=comp5;
  this.comp5=comp4;
}
swapup10(comp5,comp6){
  this.comp5=comp6;
  this.comp6=comp5;
}
swapskill1(s1,s2){
this.skl2=s1;
this.skl1=s2;
}
swapskill2(s3,s4){
  this.skl3=s4;
  this.skl4=s3;
  }
  swapskill3(s5,s6){
    this.skl5=s6;
    this.skl6=s5;
  }
  swapupskill1(s1,s3){
    this.skl1=s3;
    this.skl3=s1;
  }
  swapupskill2(s2,s4){
    this.skl2=s4;
    this.skl4=s2;
  }
  swapupskill3(s3,s5){
    this.skl3=s5;
    this.skl5=s3;
  }
  swapupskill4(s4,s6){
    this.skl4=s6;
    this.skl6=s4;
  }
  swapdeg1(d1,i1){

    this.deg1=i1;
    this.inst1=d1;
  }
  swapdeg1a(inst1,yop1){
    this.inst1=yop1;
    this.yop1=inst1
  }
  swapdeg2(d2,i2){

    this.deg2=i2;
    this.inst2=d2;
  }
  swapdeg2a(inst2,yop2){
    this.inst2=yop2;
    this.yop2=inst2;
  }
  swapdeg3(d3,i3){

    this.deg3=i3;
    this.inst3=d3;
  }
  swapupdeg1(d1,d2){
    this.deg1=d2;
    this.deg2=d1;
  }
  swapupdeg2(d2,d3){
    this.deg3=d2;
    this.deg2=d3;
  }
  swapupdeg3(deg3,deg4){
    this.deg3=deg4;
    this.deg4=deg3;
  }
  swapdeg4(deg4,inst4){
    this.deg4=inst4;
    this.inst4=deg4;
  }
  swapupinst1(i1,i2){
    this.inst1=i2;
    this.inst2=i1;
  }
  swapupinst2(i2,i3){
    this.inst3=i2;
    this.inst2=i3;
  }
  swapupyop1(yop1,yop2){
    this.yop1=yop2;
    this.yop2=yop1;
  }
  swapupyop2(yop2,yop3){
    this.yop2=yop3;
    this.yop3=yop2;
  }
  swapupyop3(yop3,yop4){
    this.yop3=yop4;
    this.yop4=yop3;
  }
 

  output()
  {

console.log('yop',this.yop1,this.yop2,this.yop3)

    var sendediteddata={
      "name":this.name,
"PhNo":this.contact,
"blobId":parseInt(this.blobID),
"Designation1": this.dsgn1 ,
"Designation2": this.dsgn2,
"Designation3": this.dsgn3,
"Designation4": this.dsgn4,
"Designation5": this.dsgn5,
"Designation6": this.dsgn6,
"Company1":this.comp1,
"Company2":this.comp2,
"Company3":this.compn3,
"Company4":this.compn4,
"Company5":this.comp5,
"Company6":this.comp6,
"Skill1":this.skl1,
"Skill2":this.skl2,
"Skill3":this.skl3,
"Skill4":this.skl4,
"Skill5":this.skl5,
"Skill6":this.skl6,
"Qualification1":this.deg1,
"Qualification2":this.deg2,
"Qualification3":this.deg3,
"Qualification4":this.deg4,
"college1":this.inst1,
"college2":this.inst2,
"college3":this.inst3,
"college4":this.inst4,
"YearOfPassg1":(this.yop1).toString(),
"YearOfPassg2":(this.yop2).toString(),
"YearOfPassg3":(this.yop3).toString(),
"YearOfPassg4":(this.yop4).toString(), // kor api call? ok kor ebar ok
"isUpdate":parseInt(this.isRead)
    }

   
   console.log("Sending data", sendediteddata)
  
    
   this._authorizationApi.saveCandidateDetails(sendediteddata).subscribe(data1=>
    {
 var dataParesed = JSON.parse(data1)
 console.log('dataParesed',dataParesed['StatusCode'])
   if (dataParesed['StatusCode']==1)
   {

    sessionStorage.setItem('isRead',"1")

    this.toast.success("Successfully Updated")
    this.route.navigate(['/admindashboard'])

   }

 }
   
  )
}

  
}
