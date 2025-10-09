import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'concat',
    standalone: false
})
export class ConcatPipe implements PipeTransform {

  transform(value: string, ...strings: string[]): string {
    return value && value.concat(...strings);
  }

}
