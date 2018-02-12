import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../flight.model';
import { FlightService } from '../../flight.service';

@Component({
	selector: 'app-flight-item',
	templateUrl: './flight-list-item.component.html',
	styleUrls: ['./flight-list-item.component.css']
})

export class FlightListItemComponent {
	@Input() private flight: Flight;

	constructor(private flightService: FlightService) {}

	onFlightSelected() {
		this.flightService.flightSelected.emit(this.flight);
	}
}