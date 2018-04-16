import { Component } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Define a users property to hold our user data

listJsonProject : any ;

listJsonPersonal : any ;
listJsonTask: any ;
listJsonReport : any ;


  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {

    // Access the Data Service's getProject() method we defined
    this._dataService.getProject()
        .subscribe(res => {this.listJsonProject = res ; 
        console.log(res)});
            // Access the Data Service's getpersonal() method we defined
            this._dataService.getPersonal()
            .subscribe(res => {this.listJsonPersonal= res ; 
            console.log(res)});

            // Access the Data Service's getreport() method we defined
            this._dataService.getReport()
            .subscribe(res => {this.listJsonReport= res ; 
            console.log(res)});
    


  }

  
}