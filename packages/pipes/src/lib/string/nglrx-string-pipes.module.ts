import { NgModule } from '@angular/core';

import { CharAtPipe } from './char-at/char-at.pipe';
import { LowerCasePipe } from './lower-case/lower-case.pipe';
import { SentenceCasePipe } from './sentence-case/sentence-case.pipe';
import { TrimPipe } from './trim/trim.pipe';
import { TrimLeftPipe } from './trim-left/trim-left.pipe';
import { TrimRightPipe } from './trim-right/trim-right.pipe';
import { UpperCasePipe } from './upper-case/upper-case.pipe';

@NgModule({
  declarations: [
    CharAtPipe,
    LowerCasePipe,
    SentenceCasePipe,
    TrimPipe,
    TrimLeftPipe,
    TrimRightPipe,
    UpperCasePipe,
  ],
  exports: [
    CharAtPipe,
    LowerCasePipe,
    SentenceCasePipe,
    TrimPipe,
    TrimLeftPipe,
    TrimRightPipe,
    UpperCasePipe,
  ]
})
export class NglrxStringPipesModule { }
