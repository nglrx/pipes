import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(values: Array<string>, separator?: string): string {
    return values && values.join(separator);
  }

}
