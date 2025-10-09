import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'floor',
    standalone: false
})
export class FloorPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = 0): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.floor(value * factor) / factor;
  }

}
