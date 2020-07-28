import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  private static DEFAULT_EXPONENT = 0;

  transform(base: number, exponent: number = PowPipe.DEFAULT_EXPONENT): number {
    return Math.pow(base, exponent);
  }

}
