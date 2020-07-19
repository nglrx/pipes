import { Pipe, PipeTransform } from '@angular/core';

import { TypeUtils } from '../../utils/type-utils';

@Pipe({
  name: 'padStart'
})
export class PadStartPipe implements PipeTransform {

  transform(value: string, maxLength: number, fillString?: string): string {
    return TypeUtils.isNullOrUndefined(value) ? null : value.padStart(maxLength, fillString);
  }

}
