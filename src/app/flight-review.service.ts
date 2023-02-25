import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightReview } from './flight-review';
import { FlightReviewDTO } from './flight-review-dto';

@Injectable({
  providedIn: 'root'
})
export class FlightReviewService {
  
  baseURL:string = 'http://localhost:9090';
  submitReviewEndPoint:string=this.baseURL+'/app/review';
  ReviewByFlightIdEndPoint:string=this.baseURL+'/app/by';
  RatingsByFlightIdEndPoint:string=this.baseURL+'/app/';
  //localhost:9090/app/by/11
  
  

  constructor(private http:HttpClient) {
    

   }

   getAllReviewByFlightId(flightId:number):Observable<FlightReviewDTO[]>{
    console.log("inside method 1" +this.ReviewByFlightIdEndPoint);
    this.ReviewByFlightIdEndPoint= this.ReviewByFlightIdEndPoint+'/'+flightId;
    console.log("after getting review 2"+ this.ReviewByFlightIdEndPoint);

    let a :string = this.ReviewByFlightIdEndPoint;
    this.ReviewByFlightIdEndPoint = this.baseURL+'/app/by';


    return this.http.get<FlightReviewDTO[]>(`${a}`);
   }


   getRatingsByFlightId(filterReviewbyrating:number):Observable<FlightReview>
   {
    console.log("inside method 1 : Review added" +filterReviewbyrating);
    
    return this.http.post<FlightReview>(`${this.RatingsByFlightIdEndPoint}`,filterReviewbyrating);
   }
   submitFlightReview(flightReview: FlightReview):Observable<FlightReview> {

    console.log("inside method 1 : Review added" +flightReview);
    
    return this.http.post<FlightReview>(`${this.submitReviewEndPoint}`,flightReview);
    
  }

}
