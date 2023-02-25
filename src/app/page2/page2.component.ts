import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FlightReview } from '../flight-review';
import { FlightReviewComponent } from '../flight-review/flight-review.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  name:string=''
  showReviewPanel = false;
  reviewFlightId=0;
  reviewFlightName='';
  numberOfStars = [1, 2, 3, 4, 5];
  constructor(private activatedRouter:ActivatedRoute,
        private router:Router) { 
          this.name = this.activatedRouter.snapshot.params['name'];
        }


        addReview(flightId:string)
        {
          this.reviewFlightId = parseInt(flightId);
          this.reviewFlightName = "Indigo"; // get it from DB or localStorage
          this.showReviewPanel = true;
        }
        closePanel()
        {
          this.showReviewPanel = false;
        }


}
