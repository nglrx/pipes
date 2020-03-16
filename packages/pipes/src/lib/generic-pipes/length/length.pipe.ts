import { Pipe, PipeTransform } from '@angular/core';
import { Util } from '../../commons/util';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: any, ...args: string[]): number {
    if (Util.isString(value) || Util.isArray(value) || (value && value.hasOwnProperty('length'))) {
      return value.length;
    } else if (Util.isNumber(value) || Util.isBoolean(value)) {
      return value.toString().length;
    }
    return null;
  }

}
