import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../flight.service';

@Component({
	selector: 'app-flight-detail',
	templateUrl: './flight-detail.component.html',
	styleUrls: ['./flight-detail.component.css']
})

export class FlightDetailComponent implements OnInit {

	private flight: Flight;

	constructor(private flightService: FlightService) {}

	ngOnInit() {
		this.flightService.flightSelected
			.subscribe(
				(flight: Flight) => {
					this.flight = flight;
				}
			)
	}
}