import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { tap, catchError, map, timeout, flatMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class AirlineService {

    constructor(private http: HttpClient) { }

    // tslint:disable-next-line: typedef
    getAirlineDetails() {
        return this.http.get<any>('https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json');

    }


}
