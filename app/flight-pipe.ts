import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'myabout'
})
export class FlightPipe implements PipeTransform{

    transform(value: any, ) {
        let about:string=value+'';

        let formattedAbout:string='';

        formattedAbout = about.slice(0,100)+'...';

        console.log('pipe method :' +formattedAbout);
        return formattedAbout; 
    }
}


