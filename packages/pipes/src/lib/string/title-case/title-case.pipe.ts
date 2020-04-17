import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, separator?: string, exclusions?: string[]): string {
    return StringUtils.toTitleCase(value, separator, exclusions);
  }

}
