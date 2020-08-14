import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'some'
})
export class SomePipe implements PipeTransform {

  transform<T>(values: Array<T>, callbackFn: (value: T, index: number, array: Array<T>) => unknown,
               thisArg?: any): boolean {
    return values && callbackFn && values.some(callbackFn, thisArg);
  }

}
