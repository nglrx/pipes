import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'max'
})
export class MaxPipe implements PipeTransform {

  transform(values: number[]): number {
    return TypeUtils.isEmpty(values) ? null : Math.max(...values);
  }

}
