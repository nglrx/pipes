import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {

  transform(values: number[]): number {
    return values && values.length > 0 ? Math.max(...values) : null;
  }

}
