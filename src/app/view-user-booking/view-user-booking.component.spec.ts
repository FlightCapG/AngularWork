import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserBookingComponent } from './view-user-booking.component';

describe('ViewUserBookingComponent', () => {
  let component: ViewUserBookingComponent;
  let fixture: ComponentFixture<ViewUserBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
