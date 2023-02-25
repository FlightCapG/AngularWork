import { Component } from '@angular/core';
import { Flight } from '../flight';
import { FlightOperationsService } from '../flight-operations.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {
  status = false;
  message = '';
  
  __flightService:FlightOperationsService;
  allFlights :Flight[]=[];

  f:Flight= new Flight(0,'','','','','',0,0,0,'','');

  constructor(flightService:FlightOperationsService)
  {
    this.__flightService = flightService;
    this.allFlights=this.__flightService.getFlightArr();
  }

  readFlight(flightId:string,carrierName:string,sourceAirport:string,destinationAirport:string,arrivalTime:string,departureTime:string,duration:string,price:string,discount:string,about:string,image:string)
  {
      console.log(flightId+" "+carrierName+" "+sourceAirport+" "+destinationAirport+"  "+arrivalTime+" "+departureTime+" "+duration+" "+price+" "+discount+" "+about+" "+image);
      let flightFromUser:Flight = new Flight(parseInt(flightId),carrierName,sourceAirport,destinationAirport,arrivalTime,departureTime,parseInt(duration),parseInt(price),parseInt(discount),image,about);
      this.__flightService.Submit(flightFromUser);
  }
  doFormSubmit()
  {
    console.log(this.f);
    this.__flightService.Submit(this.f).subscribe(
    data=>{
      this.status=true;
      this.message="Flight Added";
    },
    error=>{

    }
    )

  }
  
    

  }
  
  


