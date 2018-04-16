import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  resultProject:any;

  resultPersonal:any;


  resultReport:any;



  constructor(private _http: Http) { }

  getProject() {
    return this._http.get("http://localhost:3000/api/project")
      .map(result=> this.resultProject = this.resultProject.json().data);
  }
  getPersonal() {
    return this._http.get("http://localhost:3000/api/personal")
      .map(result => this.resultPersonal = this.resultPersonal.json().data);
  }
  getReport() {
    return this._http.get("http://localhost:3000/api/report")
      .map(result => this.resultReport = this.resultReport.json().data);
  }

}