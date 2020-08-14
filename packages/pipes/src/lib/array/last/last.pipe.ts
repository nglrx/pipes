import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {

  private static DEFAULT_COUNT = 1;

  transform<T>(values: Array<T>, count: number = LastPipe.DEFAULT_COUNT): Array<T> {
    return values && values.slice(count < 0 ? -count : values.length - count);
  }

}
