import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'every'
})
export class EveryPipe implements PipeTransform {

  transform<T>(values: Array<T>, callbackFn: (value: T, index: number, array: Array<T>) => unknown,
               thisArg?: any): boolean {
    return values && callbackFn && values.every(callbackFn, thisArg);
  }

}
