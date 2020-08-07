import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combine'
})
export class CombinePipe implements PipeTransform {

  transform<T>(value: Array<T>, ...items: (T | ConcatArray<T>)[]): Array<T> {
    return value && value.concat(...items);
  }

}
