import { Component } from '@angular/core';
import { FlightDTO } from '../flight-dto';
import { FlightOperationsService } from '../flight-operations.service';
import { FlightReviewService } from '../flight-review.service';
import { FlightReviewDTO } from '../flight-review-dto';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent {
  allFlights: FlightDTO[] = [];
  allReviews: FlightReviewDTO [] = [];
  a=0;
  reviewForFlight=0;
  constructor(private flightService: FlightOperationsService, private flightReviewService: FlightReviewService) {

  }
  getFlightByCarrier(carrierName: string) {
    this.flightService.getFlightByCarrierName(carrierName).subscribe(
      data => {
        console.log("data :- " + data);

        this.allFlights = data;
      }, err => {
        console.log("error from spring ", err);

      }
    );
  }

  getFlightBySource(sourceAirport: string) {
    this.flightService.getFlightBySourceAirport(sourceAirport).subscribe(
      data => {
        console.log("data :- " + data);

        this.allFlights = data;
      }, err => {
        console.log("error from spring ", err);

      }
    );
  }
  getFlightByDestination(destinationAirport: string) {
    this.flightService.getFlightByDestinationAirport(destinationAirport).subscribe(
      data => {
        console.log("data :- " + data);

        this.allFlights = data;
      }, err => {
        console.log("error from spring ", err);

      }
    );
  }
  getAllFlights() {
    this.flightService.getAllFlightFromSpring().subscribe(
      data => {
        console.log("data:-" + data);
        this.allFlights = data;
      }, err => {
        console.log("error from spring", err);
      }

    );
  }
  goForBooking(flight:string)
  {
    let flightId = parseInt(flight);
    console.log(" code for booking "+flightId+" flight");
}
showReview:boolean=false;


goForReview(flight:number)
  {
    
    this.flightReviewService.getAllReviewByFlightId(flight).subscribe(
      data=>{
        this.allReviews = data;
        this.showReview = true;
        this.reviewForFlight = flight;
        let sum=0;

    for (var j = 0; j < this.allReviews.length; j++){
      sum += this.allReviews[j].numberOfStars;
      
      

      }


      this.a=sum/this.allReviews.length;

      console.log(this.allReviews);
      console.log(this.a);
      }

    )
    
    let sum=0;
    for (var j = 0; j < this.allReviews.length; j++){
      sum += this.allReviews[j].numberOfStars;
      
      
      }
      this.a=sum/this.allReviews.length;


}

}




