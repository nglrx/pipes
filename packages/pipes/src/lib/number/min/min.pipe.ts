import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'min'
})
export class MinPipe implements PipeTransform {

  transform(values: number[]): number {
    return TypeUtils.isEmpty(values) ? null : Math.min(...values);
  }

}
