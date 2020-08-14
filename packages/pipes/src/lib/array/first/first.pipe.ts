import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  private static DEFAULT_COUNT = 1;

  transform<T>(values: Array<T>, count: number = FirstPipe.DEFAULT_COUNT): Array<T> {
    return values && (count ? values.slice(0, count) : []);
  }

}
