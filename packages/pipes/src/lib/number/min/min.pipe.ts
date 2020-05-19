import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'min'
})
export class MinPipe implements PipeTransform {

  transform(values: number[]): number {
    return values && values.length > 0 ? Math.min(...values) : null;
  }

}
