import { Component } from '@angular/core';
import { BookingDetailsService } from '../booking-details.service';
import { BookingDto } from '../booking-dto';

@Component({
  selector: 'app-view-user-booking',
  templateUrl: './view-user-booking.component.html',
  styleUrls: ['./view-user-booking.component.css']
})
export class ViewUserBookingComponent {
  allBooking:BookingDto[]=[];
 
bookingId:string='';
name:string='';
sourceAirport:string='';
destinationAirport:string='';
arrivalTime:string='';
dateOfBooking:string='';
timeOfBooking:string='';
  constructor(private bookingService:BookingDetailsService)
  {
    this.name=localStorage.getItem("Id")||'';
    this.name=localStorage.getItem("name")||'';
    this.arrivalTime=localStorage.getItem("dateOfBooking")||'';
    this.sourceAirport=localStorage.getItem("sourceAirport")||'';
    this.destinationAirport=localStorage.getItem("destinationAirport")||'';
    this.arrivalTime=localStorage.getItem("timeOfBooking")||'';
    this.arrivalTime=localStorage.getItem("arrivalTime")||'';
    
    
    
  }


}
