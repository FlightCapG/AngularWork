import { Component } from '@angular/core';
import { Flight } from '../flight';
import { FlightDTO } from '../flight-dto';
import { FlightReviewDTO } from '../flight-review-dto';
import { FlightReviewService } from '../flight-review.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent {
  allFlights: FlightDTO[] = [];
  allReviews: FlightReviewDTO  [] = [];
  a=0;
  reviewForFlight=0;
  constructor( private reviewService: FlightReviewService) {

  }
  showReview:boolean=false;

    goForReview(flight:number)
    {
      
      this.reviewService.getAllReviewByFlightId(flight).subscribe(
        data=>{
          this.allReviews = data;
          this.showReview = true;
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
