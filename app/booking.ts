export class Booking {
    bookingId:number;
    name:string;
    dateOfBooking:string;
    sourceAirport:string;
    destinationAirport:string;
    timeOfBooking:string;
    numberOfPassenger:number;
    arrivalTime:string;
    ticketCost:number;

    
    constructor(
        bookingId:number,
        name:string,
        dateOfBooking:string,
        sourceAirport:string,
        destinationAirport:string,
        timeOfBooking:string,
        numberOfPassenger:number,
        arrivalTime:string,
        ticketCost:number,
    ){
        this.bookingId=bookingId;
        this.name=name;
        this.dateOfBooking=dateOfBooking;
        this.sourceAirport=sourceAirport;
        this.destinationAirport=destinationAirport;
        this.timeOfBooking=timeOfBooking;
        this.numberOfPassenger=numberOfPassenger;
        this.arrivalTime=arrivalTime;
        this.ticketCost=ticketCost;

    }
}