import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { BookingDto } from './booking-dto';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  baseURL: string = 'http://localhost:9090';
  bookingByNameEndPoint = this.baseURL + '/booking/view/user';
  bookingByIdEndPoint:string=this.baseURL+'/booking/viewBooking';
  bookingByDestinationEndPoint: string = this.baseURL + '/booking/bookingsByDestination';
  bookingByDateEndPoint = this.baseURL + '/booking/bookingsBydate';
  bookingByTimeEndPoint = this.baseURL + '/booking/bookingsByTime';
  allBookingEndPoint = this.baseURL + '/booking/view';
  addBookingEndpoint = this.baseURL + '/booking/register';
  

  bookingArr: Booking[] = [];

  constructor(private http: HttpClient) {

    console.log("Inside Constructor " + this.bookingByDestinationEndPoint);

  }

  getBookingById(bookingId: number): Observable<BookingDto> {
    console.log("Inside Method 1 " + this.bookingByIdEndPoint);
    this.bookingByIdEndPoint = this.bookingByIdEndPoint + '/' + bookingId;
    console.log("After adding name 2 " + this.bookingByIdEndPoint);

    return this.http.get<BookingDto>(`${this.bookingByIdEndPoint}`);
  }
 
  getBookingByName(name: string): Observable<BookingDto[]> {
    console.log("Inside Method 1 " + this.bookingByNameEndPoint);
    this.bookingByNameEndPoint = this.bookingByNameEndPoint + '/' + name;
    console.log("After adding name 2 " + this.bookingByNameEndPoint);

    return this.http.get<BookingDto[]>(`${this.bookingByNameEndPoint}`);
  }

  getBookingByDestinationAirport(destinationAirport: string): Observable<BookingDto[]> {
    console.log("Inside Method 1 " + this.bookingByDestinationEndPoint);
    this.bookingByDestinationEndPoint = this.bookingByDestinationEndPoint + '/' + destinationAirport;
    console.log("After adding name 2 " + this.bookingByDestinationEndPoint);

    return this.http.get<BookingDto[]>(`${this.bookingByDestinationEndPoint}`);
  }
  getBookingByDate(dateOfBooking: string): Observable<BookingDto[]> {
    console.log("Inside Method 1 " + this.bookingByDateEndPoint);
    this.bookingByDateEndPoint = this.bookingByDateEndPoint + '/' + dateOfBooking;
    console.log("After adding date 2 " + this.bookingByDateEndPoint);

    return this.http.get<BookingDto[]>(`${this.bookingByDateEndPoint}`);
  }

  getBookingByTime(timeOfBooking: string): Observable<BookingDto[]> {
    console.log("Inside Method 1 " + this.bookingByTimeEndPoint);
    this.bookingByTimeEndPoint = this.bookingByTimeEndPoint + '/' + timeOfBooking;
    console.log("After adding time 2 " + this.bookingByTimeEndPoint);

    return this.http.get<BookingDto[]>(`${this.bookingByTimeEndPoint}`);
  }

  

  Booking(booking: Booking): Observable<Booking> {
    console.log("Inside the method :" + booking);

    return this.http.post<Booking>(`${this.addBookingEndpoint}`, booking);

  }

  getBookingArr(): Booking[] {
    return this.bookingArr;
  }


}
