import { Component } from '@angular/core';
import { ActivatedRoute,Route, Router } from '@angular/router';
// import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from '../booking';
import { BookingDetailsService } from '../booking-details.service';
import { BookingDto } from '../booking-dto';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {

  __bookingService: BookingDetailsService;
  status = false;
  message = '';
  allBooking: Booking[] = [];
  allBookingArr: BookingDto[] = [];
  b: Booking = new Booking(0,'', '', '', '', '', 0, '', 800);
  router: Router;
  constructor(bookingService: BookingDetailsService, router: Router, private activatedRouter: ActivatedRoute) {
    this.__bookingService = bookingService;
    this.allBooking = this.__bookingService.getBookingArr();
    this.router = router;

  }

  doFormSubmit() {

    console.log(this.b);
    this.__bookingService.Booking(this.b).subscribe(
      data => {
        this.status = true;
        this.message = "Passenger Added";
      },
      error => {

      }

    )

    this.router.navigate(['viewuserbooking']);

  }

  bookingDetails(name: string, dateOfBooking: string, sourceAirport: string, destinationAirport: string, timeOfBooking: string, arrivalTime: string) {
    localStorage.removeItem('name');
    localStorage.removeItem('dateOfBooking');
    localStorage.removeItem('sourceAirport');
    localStorage.removeItem('destinationAirport');
    localStorage.removeItem('timeOfBooking');
    localStorage.removeItem('arrivalTime');

    localStorage.setItem("name", name);
    localStorage.setItem("dateOfBooking", dateOfBooking + '');
    localStorage.setItem("sourceAirport", sourceAirport);
    localStorage.setItem("destinationAirport", destinationAirport);
    localStorage.setItem("timeOfBooking", timeOfBooking + '');
    localStorage.setItem("arrivalTime", arrivalTime);

  }

  readBooking(bookingId:string,name: string, dateOfBooking: string, sourceAirport: string, destinationAirport: string, timeOfBooking: string, numberOfPassenger: string, arrivalTime: string, ticketCost: string) {
    console.log(sourceAirport + " " + destinationAirport);
    let bookingFromUser: Booking = new Booking(parseInt(bookingId),name, dateOfBooking, sourceAirport, destinationAirport, timeOfBooking, parseInt(numberOfPassenger), arrivalTime, parseInt(ticketCost));
    this.__bookingService.Booking(bookingFromUser);

  }


}//end of class
