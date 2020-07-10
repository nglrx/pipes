import { Pipe, PipeTransform } from '@angular/core';
import { NumberUtils } from '../../utils/number-utils';

@Pipe({
  name: 'avg'
})
export class AvgPipe implements PipeTransform {

  transform(values: number[]): number {
    const sum = NumberUtils.sum(values);
    return sum ? sum / values.length : null;
  }

}
