import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trimLeft',
    standalone: false
})
export class TrimLeftPipe implements PipeTransform {

  transform(value: string): string {
    return value && value.trimLeft();
  }

}
