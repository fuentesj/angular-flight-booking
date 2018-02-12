export class Flight {
	public airline: string;
	public origin: string;
	public destination: string;
	public departureTime: string;
	public arrivalTime: string;

	public constructor(airline: string, origin: string, destination: string, departureTime: string, arrivalTime: string) {
		this.airline = airline;
		this.origin = origin;
		this.destination = destination;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
	}
}