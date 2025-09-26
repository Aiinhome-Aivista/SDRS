import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ManagersectionComponent } from './managersection/managersection.component';
import { EditpageComponent } from './editpage/editpage.component';
import { FilemanagementComponent } from './filemanagement/filemanagement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { from } from 'rxjs';
import { AuthGuardGuard } from './common/additional/auth-guard.guard'
import { SettingComponent } from './setting/setting.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // {path:'Uploadfile', component:ManagersectionComponent,canActivate:[AuthGuardGuard]},
  { path: 'filemanager', component: FilemanagementComponent },
  { path: 'admindashboard', component: DashboardComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
  { path: 'editpage', component: EditpageComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'chat', component: ChatComponent },
  // {path:'admindashboard', component:DashboardComponent,canActivate:[AuthGuardGuard]},
  // {path:'userdashboard', component:UserdashboardComponent,canActivate:[AuthGuardGuard]},
  // {path:'editpage',component:EditpageComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
