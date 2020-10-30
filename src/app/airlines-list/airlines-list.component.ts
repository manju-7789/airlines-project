import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../services/airline.service';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-airlines-list',
  templateUrl: './airlines-list.component.html',
  styleUrls: ['./airlines-list.component.css']
})
export class AirlinesListComponent implements OnInit {

  airlineList: any[];
  airlineFilteredList: any[];
  totalRecords: number;
  loading: boolean;

  first = 0;

  rows = 10;
  searchItem = '';

  constructor(private airline: AirlineService, private httpService: HttpClient, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.airline.getAirlineDetails().subscribe(
      data => {
        debugger;
        if (data) {
          this.totalRecords = data.length;
          this.formatTable(data);
        }

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

    this.loading = true;
    this.primengConfig.ripple = true;
  }

  // tslint:disable-next-line: typedef
  formatTable(data) {
    const tempList = [];
    data.forEach(ele => {
      tempList.push({
        airportName: ele.Airport.Name,
        code: ele.Airport.Code,
        carriers: ele.Statistics.Carriers.Names,
        flightsCancelled: ele.Statistics.Flights.Cancelled,
        Time: ele.Time.Label
      });
    });

    this.airlineList = tempList;
    this.airlineFilteredList = [...this.airlineList];
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.airlineList ? this.first === (this.airlineList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.airlineList ? this.first === 0 : true;
  }

  onSearch(value) {
    debugger;
    this.airlineList = this.airlineFilteredList;
    if (this.searchItem) {
      this.airlineList = this.airlineList.filter(e => e.airportName === this.searchItem);
    }

  }

}
