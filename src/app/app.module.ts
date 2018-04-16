import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule, Routes} from '@angular/router';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { StaffComponent } from './staff/staff.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';

const appRoutes: Routes = [
  {
     path: 'home',
     component: HomeComponent
  },
  {
     path: 'login',
     component: LoginComponent
  },
  {
    path:'',
    redirectTo: '/home',     
     pathMatch: 'full' 


},
{
  path: 'profil',
   component: ProfilComponent

},
{
  path:'',
  redirectTo: '/login',     
   pathMatch: 'full' 


},
{
  path: 'projects',
   component: ProjectsComponent

},
{
  path:'',
  redirectTo: '/profil',     
   pathMatch: 'full' 


}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    StaffComponent,
    TasksComponent,
    ReportComponent,
    SettingsComponent,
    LoginComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( appRoutes,{ enableTracing: true } )
                  // <-Add HttpModule
  ],
  providers: [DataService], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }