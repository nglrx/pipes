import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {

  transform<T>(values: Array<T>, value: T, start?: number, end?: number): Array<T> {
    return values && values.fill(value, start, end);
  }

}
