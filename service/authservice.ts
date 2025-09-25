import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urllink,linktoken} from '../url.service';
import { Observable } from 'rxjs';
import { type } from 'os';

@Injectable({
    providedIn: 'root' })
    export class Service_authorization{
        constructor(private http:HttpClient){}

        logindetail(user_details):Observable<any>
        {
            console.log("user_details",user_details)
            //return this.http.post(urllink.Login,user_details)
            return this.http.post("http://122.163.121.176:3005/login",user_details)
        }

        saveResumeDetails(body):Observable<any>
        {
            console.log("body",body)
            return this.http.post(urllink.saveResumeDetails,body)
        }

        getResumeList():Observable<any>
        {

            return this.http.get(urllink.getResumeList, {responseType: 'text'})
        }
        posteditedResume(body):Observable<any>
        {
           // alert()
            return this.http.post(urllink.getEditresumedetails,body)
        }
        saveCandidateDetails(body):Observable<any>
        {
            return this.http.post(urllink.saveCandidateDetails,body, {responseType: 'text'})
        }

        search2(body):Observable<any>
        {
            return this.http.post(urllink.search2,body, {responseType: 'text'})
        }

        upload(file):Observable<any>
        {
            return this.http.post("http://122.163.121.176:3005/upload",file)
        }

        searchableDropdown():Observable<any>
        {
            return this.http.get("http://122.163.121.176:3005/searchableDropdown") //http://191.96.57.217:3002/searchableDropdown
        }

        getDashboardData():Observable<any>
        {
            return this.http.get("http://122.163.121.176:3005/getAllData") //http://191.96.57.217:3002/searchableDropdown
        }

        getAllUploadedFile():Observable<any>
        {
            return this.http.get("http://122.163.121.176:3005/getAllUploadedFile") //http://191.96.57.217:3002/searchableDropdown
        }

        getDocumentCont():Observable<any>
        {
            return this.http.get("http://122.163.121.176:3005/document_count")
        }

    }
