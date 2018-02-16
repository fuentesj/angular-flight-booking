import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight.model';

@Component({
	selector: 'app-flight-list',
	templateUrl: './flight-list.component.html',
	styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

	flights: Flight[];

	constructor(private flightService: FlightService) { }

	ngOnInit() {
		this.flights = this.flightService.getFlights();
	}
}