import { Pipe, PipeTransform } from '@angular/core';
import { Util } from '../../commons/util';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (Util.isString(value)) {
      return value.split('').reverse().join('');
    } else if (Util.isNumber(value)) {
      return value.toString().split('').reverse().join('');
    } else if (Util.isArray(value)) {
      return Object.assign([], value).reverse();
    }
    return value;
  }

}
