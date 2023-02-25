export class FlightReview {
    id : number;
    flightId : number;
    numberOfStars :number;
    content :string;

    constructor(id:number, flightId : number, numberOfStars :number, content :string ){

        this.id = id;
        this.flightId = flightId;
        this.numberOfStars = numberOfStars;
        this.content = content;

    }
}
