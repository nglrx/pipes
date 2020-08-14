import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'copyWithin'
})
export class CopyWithinPipe implements PipeTransform {

  transform<T>(values: Array<T>, target: number, start?: number, end?: number): Array<T> {
    return values && values.copyWithin(target, start, end);
  }

}
