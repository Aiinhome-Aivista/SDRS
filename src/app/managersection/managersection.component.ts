import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {BlobServiceClient,AnonymousCredential,newPipeline } from '@azure/storage-blob';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';
//import { getSymbolIterator } from '@angular/core/src/util';
@Component({
  selector: 'app-managersection',
  templateUrl: './managersection.component.html',
  styleUrls: ['./managersection.component.css']
})
export class ManagersectionComponent implements OnInit {
  mainheading=localStorage.getItem('mainheading');
  constructor(DATE:DatePipe,private route:Router,private toast:ToastrService) { }
  title = 'web1';
  currentFile : File =null;
  fileData = []
  ngOnInit( 
   
  ): void {
  }
  
  dte=new Date();
  dty=this.dte.getFullYear();
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
  userlogout(){
    sessionStorage.clear()
    this.route.navigate([''])
    this.toast.error("Successfully logout")
  }
  filename;
  filetype;
  selectonfile(event){
   
    
    this.currentFile= event.target.files[0];
console.log("date",new Date(new Date().getMonth()))



    // console.log("showfile",event)
    // this.filename=event.target.files[0].name;
    // this.filetype=this.filename.split('.').pop();
    // console.log("showfilename0",this.filename)
  }
  
  async uploadfile(){
    
    var date = this.dt1+'-'+this.db0+'-'+this. dty+'_'+this.dt3+'-'+this.dt4;
    console.log("DATE",date)
    var BeforeKey = this.currentFile['name'].indexOf(".");
    var FileName = this.currentFile['name'].slice(0, BeforeKey);
    var FileKey = this.currentFile['name'].split('.').pop();


    console.log("showfilename0",FileKey,FileName)
    console.log(this.currentFile['name'])
    console.log(this.currentFile['type'])

    if(this.currentFile['type']=="application/vnd.openxmlformats-officedocument.wordprocessingml.document" || this.currentFile['type']=="application/pdf"||this.currentFile['type']=="application/msword"){
                  // generate account sas token
                const accountName =environment.accountName;
                const key=environment.key;
                const start = new Date(new Date().getTime() - (15 * 60 * 1000));
                const end = new Date(new Date().getTime() + (30 * 60 * 1000));
              const signedpermissions = 'rwdlac';
                const signedservice = 'b';
                const signedresourcetype = 'sco';
                const signedexpiry = end.toISOString().substring(0, end.toISOString().lastIndexOf('.')) + 'Z';
                const signedProtocol = 'https';
                const signedversion = '2018-03-28';

                const StringToSign =
                    accountName+ '\n' +
                    signedpermissions + '\n' +
                    signedservice + '\n' +
                    signedresourcetype + '\n' +
                    '\n' +
                    signedexpiry + '\n' +
                    '\n' +
                    signedProtocol + '\n' +
              signedversion + '\n';

              var str =CryptoJS.HmacSHA256(StringToSign,CryptoJS.enc.Base64.parse(key));
              var sig = CryptoJS.enc.Base64.stringify(str);
              
              
                const sasToken =`sv=${(signedversion)}&ss=${(signedservice)}&srt=${(signedresourcetype)}&sp=${(signedpermissions)}&se=${encodeURIComponent(signedexpiry)}&spr=${(signedProtocol)}&sig=${encodeURIComponent(sig)}`;
                const containerName=environment.containerName;

                          const pipeline =newPipeline (new AnonymousCredential(),{
                          retryOptions: { maxTries: 4 }, // Retry options
                          userAgentOptions: { userAgentPrefix: "AdvancedSample V1.0.0" }, // Customized telemetry string
                          keepAliveOptions: {
                              // Keep alive is enabled by default, disable keep alive by setting false
                              enable: false
                          }
                          });

                          const blobServiceClient =new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`,
                                                                          pipeline  )
                          const containerClient =blobServiceClient.getContainerClient(containerName)
                          if(!containerClient.exists()){
                          console.log("the container does not exit")
                          await containerClient.create()

                          }
                          const client = containerClient.getBlockBlobClient(FileName+'_'+date+'.'+FileKey)
                        const response = await client.uploadBrowserData(this.currentFile,{
                                blockSize: 4 * 1024 * 1024, // 4MB block size
                                concurrency: 20, // 20 concurrency
                                onProgress: (ev) => console.log(ev),
                                blobHTTPHeaders :{blobContentType:this.currentFile.type}
                                })
                  console.log(response._response.status)
                  this.toast.success("File upload successfully",'Success')
    }
    else{
      this.toast.error("Upload only .pdf or .docx or .doc file only",'Error')
    }
  }
}
