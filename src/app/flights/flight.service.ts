import { EventEmitter } from '@angular/core';
import { Flight } from './flight.model';

export class FlightService {
	private flights: Flight[] = [
		new Flight("Delta 1245", "SNA", "SFO", "2018/04/01", "2018/04/01"),
		new Flight("United 987", "LAX", "SFO", "2018/04/01", "2018/04/01"),
		new Flight("American 753", "JFK", "SFO", "2018/04/01", "2018/04/01"),
		new Flight("Alaska 913", "SEA", "SFO", "2018/04/01", "2018/04/01"),
		new Flight("SouthWest 841", "AUS", "SFO", "2018/04/01", "2018/04/01"),
		new Flight("Frontier 563", "SNA", "SFO", "2018/04/01", "2018/04/01"),
		new Flight("Hawaiian 9024", "JFK", "SFO", "2018/04/01", "2018/04/01"),
		new Flight("JetBlue 4325", "SFO", "SNA", "2018/04/01", "2018/04/01"),
		new Flight("Spirit 5539", "LAX", "JFK", "2018/04/01", "2018/04/01"),
		new Flight("Virgin 321", "SEA", "JFK", "2018/04/01", "2018/04/01"),
		new Flight("Sun Country 747", "AUS", "SFO", "2018/04/01", "2018/04/01")
	];

	private selectedFlight: Flight;

	flightSelected = new EventEmitter<Flight>();

	getFlights() {
		return this.flights.slice();
	}
}