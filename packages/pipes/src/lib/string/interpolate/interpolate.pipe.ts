import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'interpolate'
})
export class InterpolatePipe implements PipeTransform {

  transform(value: string, ...targetStrings: string[]): string {
    return value && value.replace(/\{(\d+)}/g, (substring: string, index: number): string =>
      TypeUtils.isNullOrUndefined(targetStrings[index]) ? substring : targetStrings[index]
    );
  }

}
