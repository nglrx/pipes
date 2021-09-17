import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  private static readonly DEFAULT_SEPARATOR = ' ';

  transform(value: string, separator: string = TitleCasePipe.DEFAULT_SEPARATOR,
            exclusions?: string[]): string {
    return StringUtils.toTitleCase(value, separator, exclusions);
  }

}
