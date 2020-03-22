import { Pipe, PipeTransform } from '@angular/core';
import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (TypeUtils.isString(value)) {
      return value.split('').reverse().join('');
    } else if (TypeUtils.isNumber(value)) {
      return value.toString().split('').reverse().join('');
    } else if (TypeUtils.isArray(value)) {
      return Object.assign([], value).reverse();
    }
    return value;
  }

}
