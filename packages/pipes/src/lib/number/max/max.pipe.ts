import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
    name: 'max',
    standalone: false
})
export class MaxPipe implements PipeTransform {

  transform(values: number[]): number {
    return TypeUtils.isEmpty(values) ? null : Math.max(...values);
  }

}
