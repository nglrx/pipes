import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  transform(value: string): string {
    return StringUtils.slugify(value);
  }

}
