import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';
import { FlightListItemComponent } from './flights/flight-list/flight-list-item/flight-list-item.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';
import { FlightSearchComponent } from './flights/flight-search/flight-search.component';
import { DatePickerComponent } from './flights/flight-search/date-picker-component/date-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightListComponent,
    FlightListItemComponent,
    FlightDetailComponent,
    FlightSearchComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
