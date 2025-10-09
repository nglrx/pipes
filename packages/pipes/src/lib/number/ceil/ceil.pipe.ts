import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ceil',
    standalone: false
})
export class CeilPipe implements PipeTransform {

  transform(value: number, decimalPlaces: number = 0): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.ceil(value * factor) / factor;
  }

}
