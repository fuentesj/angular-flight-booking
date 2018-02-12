import { Component } from '@angular/core';
import { FlightService } from './flights/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlightService]
})
export class AppComponent {
  title = 'app';
}
