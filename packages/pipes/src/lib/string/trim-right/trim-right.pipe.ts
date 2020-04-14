import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimRight'
})
export class TrimRightPipe implements PipeTransform {

  transform(value: string): string {
    return value && value.trimRight();
  }

}
