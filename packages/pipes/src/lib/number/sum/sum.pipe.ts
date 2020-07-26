import { Pipe, PipeTransform } from '@angular/core';

import { NumberUtils } from '../../utils/number-utils';
import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(values: number[]): number {
    if (TypeUtils.isNullOrUndefined(values)) {
      return null;
    } else if (TypeUtils.isEmpty(values)) {
      return 0;
    } else if (!TypeUtils.areFinite(values)) {
      return NaN;
    }
    return NumberUtils.sum(values);
  }

}
