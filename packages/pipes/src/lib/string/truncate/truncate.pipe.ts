import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  private static readonly DEFAULT_SUFFIX = '...';
  private static readonly NO_SUFFIX = '';
  private static readonly ERROR_LENGTH_LESS_THAN_ONE = `Value of argument 'length' should be >= 1.`;

  transform(
    value: string,
    length: number,
    suffix: string = TruncatePipe.DEFAULT_SUFFIX
  ): string {
    if (length < 1) {
      throw new Error(TruncatePipe.ERROR_LENGTH_LESS_THAN_ONE);
    }
    suffix = length < value?.length ? suffix : TruncatePipe.NO_SUFFIX;
    return TypeUtils.isNullOrUndefined(value)
      ? null
      : value.slice(0, length) + suffix;
  }
}
