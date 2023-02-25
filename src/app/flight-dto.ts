export class FlightDTO {
    flightId: number;
    carrierName: string;
    sourceAirport: string;
    destinationAirport: string;
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
        this.duration = duration;
        this.discount = discount;
        this.price = price;
        this.imageName = imageName;
        this.about = about;
    }
}
