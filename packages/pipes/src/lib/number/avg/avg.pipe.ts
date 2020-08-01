import { Pipe, PipeTransform } from '@angular/core';

import { NumberUtils } from '../../utils/number-utils';
import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'avg'
})
export class AvgPipe implements PipeTransform {

  transform(values: number[]): number {
    if (TypeUtils.isNullOrUndefined(values)) {
      return null;
    } else if (TypeUtils.isEmpty(values)) {
      return 0;
    } else if (!NumberUtils.areFinite(values)) {
      return NaN;
    }
    const sum = NumberUtils.sum(values);
    return sum / values.length;
  }

}
