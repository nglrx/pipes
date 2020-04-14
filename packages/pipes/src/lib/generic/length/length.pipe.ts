import { Pipe, PipeTransform } from '@angular/core';
import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: any): number {
    if (TypeUtils.isString(value) || TypeUtils.isArray(value) || (value && value.hasOwnProperty('length'))) {
      return value.length;
    } else if (TypeUtils.isNumber(value) || TypeUtils.isBoolean(value)) {
      return value.toString().length;
    }
    return null;
  }

}
