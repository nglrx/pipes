import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pct'
})
export class PctPipe implements PipeTransform {

  transform(value: number, total: number = 100, decimalPlaces?: number): number {
    let pct = value / total * 100;
    if (decimalPlaces >= 0) {
      pct = +pct.toFixed(Math.round(decimalPlaces))
    }
    return pct;
  }

}
