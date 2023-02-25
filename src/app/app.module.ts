import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { UserComponent } from './user/user.component';
import { FlightReviewComponent } from './flight-review/flight-review.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { CommonModule } from '@angular/common';
import { FlightPipe } from './flight-pipe';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewUserBookingComponent } from './view-user-booking/view-user-booking.component';



const allLinks:Routes=[
  {path:'add-flight',component:AddFlightComponent},
  {path:'view',component:ViewFlightComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'bookingdetails',component:BookingDetailsComponent},
  {path:'viewbooking',component:ViewBookingComponent},
  {path:'viewuserbooking',component:ViewUserBookingComponent},
  


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    AboutUsComponent,
    UserComponent,
    FlightReviewComponent,
    FlightPipe,
    AddFlightComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ViewFlightComponent,
    BookingDetailsComponent,
    ViewBookingComponent,
    ViewUserBookingComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    CommonModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
