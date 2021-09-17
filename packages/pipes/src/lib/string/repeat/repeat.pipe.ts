import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'repeat',
})
export class RepeatPipe implements PipeTransform {
  private static readonly DEFAULT_COUNT = 1;
  private static readonly DEFAULT_DELIMITER = '';
  private static readonly ERROR_COUNT_LESS_THAN_ONE = `Value of argument 'count' should be >= 1`;

  transform(
    value: string,
    count: number = RepeatPipe.DEFAULT_COUNT,
    delimiter: string = RepeatPipe.DEFAULT_DELIMITER
  ): string {
    if (count < 1) {
      throw new Error(RepeatPipe.ERROR_COUNT_LESS_THAN_ONE);
    }
    return TypeUtils.isNullOrUndefined(value)
      ? null
      : Array(count).fill(value).join(delimiter);
  }
}
