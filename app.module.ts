import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagersectionComponent } from './managersection/managersection.component';
import { LoginComponent } from './login/login.component';
import { FilemanagementComponent } from './filemanagement/filemanagement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditpageComponent } from './editpage/editpage.component';
import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import{AuthGuardGuard} from '../app/common/additional/auth-guard.guard';
import { LeftsidemenuComponent } from './common/leftsidemenu/leftsidemenu.component'
import bootstrap from "bootstrap";
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { DocumentfilterPipe } from './pipe/documentfilter.pipe';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SettingComponent } from './setting/setting.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ChatComponent } from './chat/chat.component';




@NgModule({
  declarations: [
    AppComponent,
    ManagersectionComponent,
    LoginComponent,
    FilemanagementComponent,
    DashboardComponent,
    EditpageComponent,
    HeaderComponent,
    LeftsidemenuComponent,
    UserdashboardComponent,
    DocumentfilterPipe,
    AutocompleteComponent,
    SettingComponent,
    ChatComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule, 
    DialogModule,
    AutoCompleteModule,
    ToastrModule.forRoot({
      timeOut:2500,
      preventDuplicates: true
    }),
  
  ],
  providers: [DatePipe,AuthGuardGuard,ToastrService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
