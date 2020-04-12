import { Pipe, PipeTransform } from '@angular/core';
import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any): any {
    return TypeUtils.isString(value) ? value.trim() : value;
  }

}
