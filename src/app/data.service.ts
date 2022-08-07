import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  fetchData(){
    // return this.http.get('/assets/ninjas.json').subscribe(
    //   (data) => console.log(data)
    // );

    return this.http.get('/assets/ninjas.json')
  }
}
