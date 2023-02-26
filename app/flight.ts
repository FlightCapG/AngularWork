export class Flight {
    flightId: number;
    carrierName: string;
    sourceAirport: string;
    destinationAirport: string;
    arrivalTime:string;
    departureTime:string;
    duration: number;
    price: number;
    discount: number;
    imageName: string;
    about: string;

    constructor(
        flightId: number,
        carrierName: string,
        sourceAirport: string,
        destinationAirport: string,
        arrivalTime:string,
        departureTime:string,
        duration: number,
        price: number,
        discount: number,
        imageName: string,
        about: string,
    ) {
        this.flightId = flightId;
        this.carrierName = carrierName;
        this.sourceAirport = sourceAirport;
        this.destinationAirport = destinationAirport;
        this.arrivalTime=arrivalTime;
        this.departureTime=departureTime;
        this.duration = duration;
        this.discount = discount;
        this.price = price;
        this.imageName = imageName;
        this.about = about;
    }
}