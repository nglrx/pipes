import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: string, ...strings: string[]): string {
    return value && value.concat(...strings);
  }

}
