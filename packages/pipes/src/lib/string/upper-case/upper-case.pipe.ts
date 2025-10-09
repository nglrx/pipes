import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
    name: 'upperCase',
    standalone: false
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string): string {
    return StringUtils.toUpperCase(value);
  }

}
