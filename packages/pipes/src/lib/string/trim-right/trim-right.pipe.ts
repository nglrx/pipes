import { Pipe, PipeTransform } from '@angular/core';
import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'trimRight'
})
export class TrimRightPipe implements PipeTransform {

  transform(value: any): any {
    return TypeUtils.isString(value) ? value.trimRight() : value;
  }

}
