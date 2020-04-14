import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charAt'
})
export class CharAtPipe implements PipeTransform {

  transform(value: string, position?: number): string {
    return value && value.charAt(position);
  }

}
