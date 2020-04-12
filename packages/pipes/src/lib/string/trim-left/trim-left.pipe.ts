import { Pipe, PipeTransform } from '@angular/core';
import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'trimLeft'
})
export class TrimLeftPipe implements PipeTransform {

  transform(value: any): any {
    return TypeUtils.isString(value) ? value.trimLeft() : value;
  }

}
