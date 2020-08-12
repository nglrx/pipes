import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform<T, U>(values: Array<T>, callbackFn: (value: T, index: number, array: Array<T>) => U,
               thisArg?: any): Array<U> {
    return values && callbackFn && values.map(callbackFn, thisArg);
  }

}
