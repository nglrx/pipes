import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'abs',
    standalone: false
})
export class AbsPipe implements PipeTransform {

  transform(value: number): number {
    return Math.abs(value);
  }

}
