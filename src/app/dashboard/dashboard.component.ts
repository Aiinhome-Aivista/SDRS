import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service_authorization } from '../service/authservice';
import { DOCUMENT } from '@angular/common';
import { Table } from 'primeng/table';
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @ViewChild('dt') rd: Table;
  mainheading = localStorage.getItem('mainheading');
  constructor(private route: Router, private toast: ToastrService, private _authorizationApi: Service_authorization, @Inject(DOCUMENT) private document: Document) { }
  viewDetails = {
    "name1": "",
    "name2": "",
    "name3": "",
    "address1": "",
    "address2": "",
    "address3": "",
    "dob": "",
    "document_type": "",
    "identity_no": "",
    "id": "",
    "image_link": "",
    "created_date": ""
  }
  display: boolean = false;

  file_create;
  file_edit;
  columnField: any = []
  FileManagementColsFilter: any = []
  FilterArray: any = [];
  TableHeaderArray: String[] = [];
  searchValue = ''

  TextArray: any = [
    { label: "Text" },
    { label: "Text" },
    { label: "Text" },
  ]
  showLebel: boolean = true
  showLebel1: boolean = true
  showLebel2: boolean = true
  showLebel3: boolean = true
  showLebel4: boolean = true
  showLebel5: boolean = true
  spinner: boolean = false;
  searchQuery: string = '';
  recognition: any;
  listening: boolean = false;
  selectedLanguage: any;

  clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
        delete obj[propName];
      }
    }
    return obj
  }
  showDialog(data) {
    console.log("eyeclick", data)

    //  let filterobj = Object.keys(data).forEach(key => {
    //     if (data[key] == null) {
    //       delete data[key];
    //     }
    //   });
    console.log("obj.......", this.clean(data))


    let OBJkeys = Object.keys(this.clean(data))
    let OBJValues = Object.values(this.clean(data));
    this.TableHeaderArray = OBJkeys;
    this.FilterArray = OBJValues;

    console.log(" OBJkeys ", OBJkeys);
    console.log(" OBJValues ", this.TableHeaderArray);

    // var filtered = result.filter(function (el) {
    //   return el != null && el != "";
    // });






    // console.log("out of condition",this.FilterArray.length)
    // this.TableHeaderArray=[];
    // for (let i = 0; i < this.FilterArray.length; i++) {



    //   // console.log("out of condition")
    //    if(i==0)
    //   {
    //     this.TableHeaderArray.push("Description");
    //   }
    //   else if(i==2)
    //   {
    //     this.TableHeaderArray.push("File Type");
    //   }else if(i==3)
    //   {
    //     this.TableHeaderArray.push("Mixed data");
    //   }
    //   else if (typeof  this.FilterArray[i] == "string" && this.FilterArray[i].indexOf('GMT') > -1) {
    //       console.log("looped...",this.FilterArray[i])
    //       this.TableHeaderArray.push("Date");
    //   }else if(typeof  this.FilterArray[i] == "string" && this.FilterArray[i].indexOf('/') > -1)
    //   {
    //     this.TableHeaderArray.push("Date");
    //   }else if(typeof  this.FilterArray[i] == "string" && this.FilterArray[i].indexOf('.') > -1)
    //   {
    //     this.TableHeaderArray.push("File Name");
    //   }
    //  else{
    //   this.TableHeaderArray.push("Text");
    //  }

    // }


    console.log("array Headder", this.TableHeaderArray);


    // here all null value filltered


    if (data.Name1 == "") {
      this.showLebel = false
    }
    if (data.Name2 == "") {
      this.showLebel1 = false
    }
    if (data.Name3 == "") {
      this.showLebel2 = false
    }
    if (data.Address1 == "") {
      this.showLebel3 = false
    }
    if (data.Address2 == "") {
      this.showLebel4 = false
    }
    if (data.Address3 == "") {
      this.showLebel5 = false
    }
    this.viewDetails.id = data.id;
    this.viewDetails.name1 = data.Name1;
    this.viewDetails.name2 = data.Name2;
    this.viewDetails.name3 = data.Name3;
    this.viewDetails.address1 = data.Address1;
    this.viewDetails.address2 = data.Address2;
    this.viewDetails.address3 = data.Address3;
    this.viewDetails.dob = data.DOB;
    this.viewDetails.document_type = data.Document_Type;
    this.viewDetails.identity_no = data.Identity_No;
    this.viewDetails.image_link = data.image_link;
    this.viewDetails.created_date = data.created_date;
    console.log("filtered data", data);


  }
  closeDialog() {
    this.display = false;
  }

  searchField() {
    console.log("search..............", this.searchValue)

    var body = {
      "blobname": this.searchValue
    }
    this._authorizationApi.search2(body).subscribe(data => {
      console.log('columndate........', data);
      console.log('search', JSON.parse(data))
      this.ResumeTableData = JSON.parse(data)
    })
  }

  getAlldata() {
    this.spinner = true;
    setTimeout(() => this.spinner = false, 3000);
    this._authorizationApi.getDashboardData().subscribe(data => {
      console.log("dashboard data tohohoh ----------------------->", data);
      if (data.status) {
        this.ResumeTableData = data.data
        this.ResumeTableDataFilter = data.data
        this.columnField = Object.keys(data.data[0])

      }
      else {
        this.toast.error("Record not found", 'Error');
      }
    })
  }


  ngOnDestroy() {
    // Clear intervals to prevent memory leaks
    if (this.conterStop) clearInterval(this.conterStop);
    if (this.successStop) clearInterval(this.successStop);
    if (this.matchedStop) clearInterval(this.matchedStop);
  }

  ngOnInit(): void {
    this.languagechnge(0);
    this.funDocumentCount()

    this.columnField = []

    this.FileManagementCols = [

      { header: 'Uploaded Name', field: 'Name', width: '40px', sort: true },
      { header: 'Document', field: 'Document_Type', width: '40px', sort: true },
      { header: 'Date', field: 'DOB', width: '60px', sort: true },
      { header: 'Address', field: 'Address1', width: '60px', sort: true },
      { header: 'Action', field: 'action', width: '20px' }

    ];

    console.log('thojhhxidgns', this.columnField)

    this.getAlldata()
  }


  ResumeTableDataFilter: any = []
  counter: any;

  funDocumentCount = () => {
    this._authorizationApi.getDocumentCont().subscribe(data => {
      console.log("documentgetCount", data);
      this.counter = data;

      // Start counters only after we have the data
      this.startCounters();
    });
  }

  startCounters() {
    if (this.conterStop) clearInterval(this.conterStop);
    this.conterStop = setInterval(() => {
      if (this.documentCounter < this.counter.Document_uploaded) {
        this.documentCounter++;
      } else {
        clearInterval(this.conterStop);
      }
    }, 10); // Increased interval for better performance

    if (this.successStop) clearInterval(this.successStop);
    this.successStop = setInterval(() => {
      if (this.documentSucess < this.counter.Document_read_success) {
        this.documentSucess++;
      } else {
        clearInterval(this.successStop);
      }
    }, 10);

    // You can add back the matchedStop interval here if needed, following the same pattern.
  }

  somethingChanged(data: any) {
    console.log("ccccccccccccccccccccccccccccccccccccc", data, this.searchValue);
  }



  modelChanged(newObj: any) {
    // console.log("asdasdasdasdasdasdsad", newObj)

    // this.ResumeTableData = this.ResumeTableDataFilter.filter((val: any) => val.toLowerCase().includes(newObj.toLowerCase()) == true)


    // this.ResumeTableData=this.ResumeTableDataFilter.filter(el=>{
    // console.log("asdasdasdasdasdasdsad", this.ResumeTableData)

    // })
    // do something with new value
  }
  //animation counter start**************************************************************************

  //animation conter end*****************************************************************************
  FileManagementCols;
  ResumeTableData = [];
  dte = new Date();
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

  auth_key = sessionStorage.getItem("Firstname");
  userlogout() {
    sessionStorage.clear()
    this.route.navigate([''])
    this.toast.error("Successfully logout")
  }
  navigate() {
    this.route.navigate(['chat'])
    localStorage.setItem('mainheading', 'Resource manager section')
  }
  documentCounter: number = 0;
  documentSucess: number = 0;
  documentMatched: number = 0;

  conterStop: any;
  successStop: any;
  matchedStop: any;


  showDocuments(data) {

    console.log("link..........", data)
    window.open("http://127.0.0.1:5000/viewDocument/" + data.image_link, '_blank');


  }
  toggleListening(): void {
    if (!this.listening) {
      this.startListening();
    } else {
      this.stopListening();
    }
    this.listening = !this.listening;
  }

  languagechnge(lng: any) {
    if (lng == 1) {
      this.selectedLanguage = 'en-IN';

    }
    else if (lng == 2) {
      this.selectedLanguage = 'hi-IN';
    }
    else {
      this.selectedLanguage = 'en-US';
    }

  }

  startListening(): void {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.lang = this.selectedLanguage;
    // this.recognition.lang = 'en-US';
    // this.recognition.lang = 'hi-IN';
    // this.recognition.lang = 'en-IN';
    this.recognition.start();
    this.recognition.onresult = (event: any) => {
      const result = event.results[0][0].transcript;
      this.searchQuery = result;
      this.stopListening();
      this.search();
    };
  }

  stopListening(): void {
    this.recognition.stop();
  }

  search(): void {
    // Perform the search with the searchQuery value
  }
}
