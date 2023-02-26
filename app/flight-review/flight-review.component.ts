import { Component } from '@angular/core';
import { FlightReview } from '../flight-review';
import { FlightReviewService } from '../flight-review.service';




@Component({
  selector: 'app-flight-review',
  templateUrl: './flight-review.component.html',
  styleUrls: ['./flight-review.component.css']
})
export class FlightReviewComponent {
  model: FlightReview = new FlightReview(0,0,0,'');
  submitted = false;
  success = false;
  error = false;
  numberOfStars = [1, 2, 3, 4, 5];
  status = false;
  message = '';
  
  constructor(private flightReviewService: FlightReviewService) {
    let abc:string=localStorage.getItem("flightId") || '';
    this.model.flightId=parseInt(abc);
  }

  onSubmit() {
    this.flightReviewService.submitFlightReview(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="flight review submitted";

      },
      error=>{
        console.log(error);

      }

    );

    

   
  }

  


}
