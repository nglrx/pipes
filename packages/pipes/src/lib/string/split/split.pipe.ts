import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  static readonly DEFAULT_DELIMITER = ' ';

  transform(value: string, delimiter: string | RegExp = SplitPipe.DEFAULT_DELIMITER,
            limit?: number): Array<string> {
    return TypeUtils.isNullOrUndefined(value) ? null: value.split(delimiter, limit);
  }

}
