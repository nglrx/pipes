import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
  name: 'lowerCase'
})
export class LowerCasePipe implements PipeTransform {

  transform(value: string): string {
    return StringUtils.toLowerCase(value);
  }

}
