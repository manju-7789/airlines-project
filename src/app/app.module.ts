import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import {AirlineService} from './services/airline.service';
import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    AirlinesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule
  ],
  providers: [AirlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
