import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'padEnd'
})
export class PadEndPipe implements PipeTransform {

  transform(value: string, maxLength: number, fillString?: string): string {
    return TypeUtils.isNullOrUndefined(value) ? null : value.padEnd(maxLength, fillString);
  }

}
