import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  resultProject:any;

  resultPersonal:any;


  resultReport:any;



  constructor(private http: Http) { }

  getProject() {
    return this.http.get("./api/project")
      .map(resp => resp.json()).subscribe(data=>{console.log(data)},
      err=>{
        console.log(err)
  
  
      })
    }
  
  getPersonal() {
    return this.http.get("./api/personal")
     .map(result => this.resultPersonal = this.resultPersonal.json().data);
  }
  getReport() {
    return this.http.get("./api/report") .map(result => this.resultReport = this.resultReport.json().data);
  }

}