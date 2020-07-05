import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(values: number[]): number {
    return values && values.length > 0 ? values.reduce((sum, value) => sum + value, 0) : null;
  }

}
