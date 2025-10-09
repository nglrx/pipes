import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'typeOf',
    standalone: false
})
export class TypeOfPipe implements PipeTransform {

  transform(value: any): string {
    return typeof value;
  }

}
