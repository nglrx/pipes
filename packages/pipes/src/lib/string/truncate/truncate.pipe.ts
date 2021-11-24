import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  private static readonly DEFAULT_SUFFIX = '...';
  private static readonly DEFAULT_PRESERVE_WORDS = false;
  private static readonly SPACE = ' ';
  private static readonly ERROR_LENGTH_LESS_THAN_ONE = `Value of argument 'length' should be >= 1.`;

  transform(
    value: string,
    length: number,
    suffix: string = TruncatePipe.DEFAULT_SUFFIX,
    preserveWords: boolean = TruncatePipe.DEFAULT_PRESERVE_WORDS
  ): string {
    if (length < 1) {
      throw new Error(TruncatePipe.ERROR_LENGTH_LESS_THAN_ONE);
    }
    if (!TypeUtils.isNullOrEmpty(value) && length < value.length) {
      if (!preserveWords) {
        return value.slice(0, length) + suffix;
      }
      if (!!~value.indexOf(TruncatePipe.SPACE, length)) {
        return value.slice(0, value.indexOf(TruncatePipe.SPACE, length)) + suffix;
      }
    }
    return value;
  }
}
