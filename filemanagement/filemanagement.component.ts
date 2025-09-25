import { getLocaleDateFormat } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter, Inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlobServiceClient, AnonymousCredential, newPipeline } from '@azure/storage-blob';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';
import { DatePipe } from '@angular/common';
import { Service_authorization } from '../service/authservice';
import { of, fromEvent, Observable } from 'rxjs'
import { debounceTime, map, distinctUntilChanged, switchMap, tap } from "rxjs/operators"
import { DOCUMENT } from '@angular/common';
import { AutoComplete } from 'primeng/autocomplete';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-filemanagement',
  templateUrl: './filemanagement.component.html',
  styleUrls: ['./filemanagement.component.css']
})
export class FilemanagementComponent implements OnInit {
  mainheading = localStorage.getItem('mainheading');
  @ViewChild('inputFile', { static: false }) myInputVariable: ElementRef;
  searchText: any = ''
  columnField: any = []
  selectedCountry: any;
  filteredSearchData: any[];

  @ViewChild('autocomplete') autocomplete: AutoComplete;
  constructor(
    DATE: DatePipe,
    private route: Router,
    private toast: ToastrService,
    private _authorizationApi: Service_authorization,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {

    // this.ArrayData = [
    //   'tohid_30-1-2005',
    //   'tohid-2-05-2023-murshidabad',
    //   'tohid',
    //   'tohid',
    //   'tohid',
    //   'tohid',
    //   'tohid',
    //   'tohid',
    //   'tohid',
    //   'tohid'
    // ]
  }
  title = 'web1';
  // currentFile:File = null;
  currentFile: any;
  allImageArray: any;
  allFiles: string[] = [];
  filearray: any = [];
  @ViewChild('fileNameSearch') fileInputSearch: ElementRef
  showsSearchesPanel: boolean = false
  isSearching: boolean = false
  ArrayData: any = []
  apiArrayData: any = []
  dte = new Date();
  dty = this.dte.getFullYear();
  db0 = this.dte.getMonth();
  dt1 = this.dte.getDate();
  dB = this.dte.getDay();
  dt3 = this.dte.getHours();
  dt4 = this.dte.getMinutes();
  day_arr = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
  month_arr = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december')
  dt2 = this.day_arr[this.dB];
  dt0 = this.month_arr[this.db0];
  APM = this.dt3 >= 12 ? 'PM' : 'AM';
  fileData = [];
  UserID: any;
  ResumeTableData;
  filename;
  filetype;
  FileManagementCols = new Array();
  fileName: string = "";
  searchDATA: any;
  fileId: any = 0;

  options: any = '';
  textboxValue: any = '';

  // Save(form: NgForm): void {
  //   console.log(form.value)
  // }

  ngOnInit(): void {



    this.FileManagementCols = [

      { header: 'Name', field: 'Name', sort: true },
      { header: 'Upload Date', field: 'created_date', sort: true },
      { header: 'Number of Images', field: 'image_count', sort: true },


    ];
    this.FileManagementCols.forEach(el => el.field != 'image_count' ? this.columnField.push(el.field) : '')



    // this._authorizationApi.getResumeList().subscribe(data => {
    //   this.ResumeTableData = JSON.parse(data)
    //   console.log('dd', this.ResumeTableData)
    //   this.ResumeTableData.forEach(element => {
    //     if (element.isRead == 1) {
    //       element.status = "Edited";
    //     }
    //     else {
    //       element.status = "Not Edited";
    //     }
    //   });
    // })

    this._authorizationApi.searchableDropdown().subscribe(data => {
      //this.ArrayData = data.data
      this.searchDATA = data.data
      console.log("Searchable drop down------>", this.searchDATA);
      for (let index = 0; index < data.data.length; index++) {
        if (data.data[index].Name) {
          this.ArrayData.push(data.data[index].Name);
          //this.ArrayData.push(data.data[index].id)
        }

      }
      // console.log("arr data------>", this.ArrayData);
    })

    // this._authorizationApi.getAllUploadedFile().subscribe(data => {
    //   console.log('fileall data --------------------->', data)
    //   if (data.status) {
    //     this.ResumeTableData = data.data
    //   }
    //   else {
    //     //this.ResumeTableData = "";
    //   }

    // })
    // this.renderer.addClass(
    //   this.document.getElementById('upload_document'),
    //   'active'
    // );

  }


  goToLink(rowdata) {
    this.allImageArray = rowdata.file_name.split(',');
    console.log("file names arr==========================>", this.allImageArray);

  }



  navigate() {
    this.route.navigate(['Managersection'])
    localStorage.setItem('mainheading', 'Resource manager section')
  }
  navigate1(val) {

    this.route.navigate(['/editpage']);
    sessionStorage.setItem('filename', val.blobName)
    sessionStorage.setItem('blobid', val.blobId)
    sessionStorage.setItem('isRead', val.isRead)

  }
  userlogout() {
    sessionStorage.clear()
    this.route.navigate([''])
    this.toast.error("Successfully logout")
  }
  selectedFilesNo: any
  FileNameShow: boolean = false
  selectonfile(event) {
    console.log("files name", event.target.files.length);

    if (event.target.files.length !== 0) {
      this.FileNameShow = true
      this.selectedFilesNo = event.target.files.length
    }

    for (let i = 0; i < event.target.files.length; i++) {
      this.allFiles.push(event.target.files[i]);
    }
  }
  async uploadResume() {

    // console.log("textboxValue", this.textboxValue)

    this.UserID = sessionStorage.getItem("userid");
    console.log("UserData......", this.UserID);

    const formData = new FormData();
    console.log("upload name,,,,,,,", this.fileName);


    if (this.fileName != "" && this.allFiles.length > 0 && this.options != "") {

      // if(this.fileId !=""){
      //   formData.append("id", this.fileId);
      // }
      // else{
      //   formData.append("id", "0");       
      // } 

      formData.append("name", this.fileName);
      formData.append("uploaded_by", this.UserID);
      formData.append("id", this.fileId);
      formData.append("description", this.textboxValue);
      for (var i = 0; i < this.allFiles.length; i++) {
        formData.append("file", this.allFiles[i]);
      }

      // console.log("textboxValue",this.textboxValue)
      // console.log(formData);
      // console.log("file name",this.fileName);
      // console.log("field name",this.fileId);
      // console.log("all files",this.allFiles);


      this._authorizationApi.upload(formData).subscribe(data => {
        console.log("Uploadedrespp", data)
        if (data.status) {
          this.fileId = "";
          this.toast.success("File upload successfully", 'Success');
          setTimeout(() => {
            window.location.reload()
          }, 1500);
        }
        else {
          this.toast.error("File not uploaded", 'Error');
        }
      })
    }

    else {
      this.toast.error("Please fill the required fields ", 'Error');
    }
  }

  // uploadResume1(){

  // }


  // filterFileName(data: any) {
  //   return this.ArrayData.filter((val: any) => val.toLowerCase().includes(data.toLowerCase()) == true)
  // }
  // setFileName(data: any) {
  //   // console.log("keyup ",data);

  //   this.fileId = 0;
  //   console.log('data id key', data.target.value)
  //   if (data.target.value != '') {
  //     // this.apiArrayData = this.filterFileName(data.target.value);
  //     this.apiArrayData = this.ArrayData.filter((val: any) => val.toLowerCase().includes(data.target.value.toLowerCase()) == true)

  //     console.log("keyup ", data);
  //   }
  //   else {
  //     this.apiArrayData = [];

  //   }
  // }
  selectFileName(data: any) {
    console.log('select file name', data)

    this.fileId = data.id
    console.log("after select", this.fileId);

    // this.fileName = data
    // this.showsSearchesPanel = false
    // for (let index = 0; index < this.searchDATA.length; index++) {
    //   if (data == this.searchDATA[index].Name) {
    //     this.fileId = this.searchDATA[index].id
    //     console.log("update file id",this.fileId);


    //   }
    // }

  }
  // searchoutevent() {
  //   this.showsSearchesPanel = !this.showsSearchesPanel
  // }
  // searchInput: any
  // clearSearch() {
  //   this.searchInput = this.document.getElementById('search_input');
  //   this.fileName = "";
  //   this.apiArrayData = [];
  //   // this.ArrayData=[]
  //   this.searchInput.focus();
  //   console.log(this.searchInput);

  // }


  //-------------------------Rabi--------------------------
  filterSearchData(event) {
    let filtered: any[] = [];
    let query = event.query;
    //console.log(query);

    for (let i = 0; i < this.searchDATA.length; i++) {
      let dataSearch = this.searchDATA[i];
      //console.log("datasearchname::",dataSearch.Name);
      //let ds = "BurdwanRohan09-03-23";
      //console.log(dataSearch.Name.toLowerCase().indexOf(query.toLowerCase()));
      if (dataSearch.Name.toLowerCase().indexOf(query.toLowerCase()) != -1) {


        filtered.push(dataSearch);
      }
    }
    this.filteredSearchData = filtered;
  }
  onClear() {
    this.fileName = '';
  }

  // For toggle
  isShowDivIf = true;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  toggleDisplayDivIfTrue() {
    this.isShowDivIf = true;
  }


  //----------------------------------------------------------------------------------
}
