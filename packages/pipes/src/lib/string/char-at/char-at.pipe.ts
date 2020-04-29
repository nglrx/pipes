import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
  name: 'charAt'
})
export class CharAtPipe implements PipeTransform {

  transform(value: string, position?: number): string {
    return StringUtils.charAt(value, position);
  }

}
