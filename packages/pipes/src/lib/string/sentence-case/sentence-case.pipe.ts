import { Pipe, PipeTransform } from '@angular/core';
import { StringUtils } from '../../utils/string-utils';

@Pipe({
    name: 'sentenceCase',
    standalone: false
})
export class SentenceCasePipe implements PipeTransform {

  transform(value: string): string {
    return StringUtils.toSentenceCase(value);
  }

}
