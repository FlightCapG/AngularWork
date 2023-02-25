import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { FlightDTO } from './flight-dto';



@Injectable({
  providedIn: 'root'
})
export class FlightOperationsService {
  baseURL: string='http://localhost:9090';

  flightByIdEndPoint: string = this.baseURL+'/flight/id';
  flightByCarrierNameEndPoint: string = this.baseURL+'/flight/cn';
  flightBySourceAirportEndPoint: string = this.baseURL+'/flight/sa';
  flightByDestinationAirportEndPoint: string = this.baseURL+'/flight/da';
  allFlightEndPoint: string = this.baseURL +'/flight/list';
  addFlightEndPoint: string = this.baseURL+'/flight/register';

  // localhost:9090/flight/id
  // localhost:9090/flight/list
  // localhost:9090/flight/cn
  // localhost:9090/flight/sa
  // localhost:9090/flight/da

  flightArr: Flight[] = [];

  constructor(private http: HttpClient) {
    console.log("Inside Constructor " + this.flightByIdEndPoint);
    console.log("Inside Constructor " + this.flightByCarrierNameEndPoint);
    console.log("Inside Constructor " + this.flightBySourceAirportEndPoint);
    console.log("Inside Constructor " + this.flightByDestinationAirportEndPoint);
    console.log("Inside Constructor " + this.addFlightEndPoint);

  }
  
  getFlightById(flightId: number): Observable<FlightDTO[]> {
    console.log("Inside Method 1 " + this.flightByIdEndPoint);
    this.flightByIdEndPoint = this.flightByIdEndPoint + '/' + flightId;
    console.log("After adding id 2 " + this.flightByIdEndPoint);

    return this.http.get<FlightDTO[]>(`${this.flightByIdEndPoint}`);

  }

  getFlightByCarrierName(carrierName: string): Observable<FlightDTO[]> {
    console.log("Inside Method 1 " + this.flightByCarrierNameEndPoint);
    this.flightByCarrierNameEndPoint = this.flightByCarrierNameEndPoint + '/' + carrierName;
    console.log("After adding carrier 2 " + this.flightByCarrierNameEndPoint);

    return this.http.get<FlightDTO[]>(`${this.flightByCarrierNameEndPoint}`);
  }


  getFlightBySourceAirport(sourceAirport: string): Observable<FlightDTO[]> {
    console.log("Inside Method 1 " + this.flightBySourceAirportEndPoint);
    this.flightBySourceAirportEndPoint = this.flightBySourceAirportEndPoint + '/' + sourceAirport;
    console.log("After adding source 2 " + this.flightBySourceAirportEndPoint);

    return this.http.get<FlightDTO[]>(`${this.flightBySourceAirportEndPoint}`);
  }

  getFlightByDestinationAirport(destinationAirport: string): Observable<FlightDTO[]> {
    console.log("Inside Method 1 " + this.flightByDestinationAirportEndPoint);
    this.flightByDestinationAirportEndPoint = this.flightByDestinationAirportEndPoint + '/' + destinationAirport;
    console.log("After adding destination 2 " + this.flightByDestinationAirportEndPoint);

    return this.http.get<FlightDTO[]>(`${this.flightByDestinationAirportEndPoint}`);
  }


  Submit(flight:Flight) :Observable<Flight>
  {
    console.log("Inside Flight method "+flight);

    return this.http.post<Flight>(`${this.addFlightEndPoint}`,flight);
  }
  getFlightArr(): Flight[] {
    return this.flightArr;
  }

  getAllFlightFromSpring():Observable<FlightDTO[]>{
    console.log("inside service :"+this.allFlightEndPoint);
    return this.http.get<FlightDTO[]>(`${this.allFlightEndPoint}`);
  }


  

}
