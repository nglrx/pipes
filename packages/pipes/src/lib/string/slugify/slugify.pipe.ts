import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  static readonly DEFAULT_SEPARATOR = '-';

  transform(value: string, separator: string = SlugifyPipe.DEFAULT_SEPARATOR): string {
    return StringUtils.slugify(value, separator);
  }

}
