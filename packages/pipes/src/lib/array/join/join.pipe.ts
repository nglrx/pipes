import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: Array<string>, separator?: string): string {
    return value && value.join(separator);
  }

}
