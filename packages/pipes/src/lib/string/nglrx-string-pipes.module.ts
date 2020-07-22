import { NgModule } from '@angular/core';

import { CamelCasePipe } from './camel-case/camel-case.pipe';
import { CharAtPipe } from './char-at/char-at.pipe';
import { ConcatPipe } from './concat/concat.pipe';
import { LowerCasePipe } from './lower-case/lower-case.pipe';
import { PadEndPipe } from './pad-end/pad-end.pipe';
import { PadStartPipe } from './pad-start/pad-start.pipe';
import { PascalCasePipe } from './pascal-case/pascal-case.pipe';
import { SentenceCasePipe } from './sentence-case/sentence-case.pipe';
import { SlugifyPipe } from './slugify/slugify.pipe';
import { SplitPipe } from './split/split.pipe';
import { TitleCasePipe } from './title-case/title-case.pipe';
import { TrimPipe } from './trim/trim.pipe';
import { TrimLeftPipe } from './trim-left/trim-left.pipe';
import { TrimRightPipe } from './trim-right/trim-right.pipe';
import { UpperCasePipe } from './upper-case/upper-case.pipe';

const STRING_PIPES = [
  CamelCasePipe,
  CharAtPipe,
  ConcatPipe,
  LowerCasePipe,
  PadEndPipe,
  PadStartPipe,
  PascalCasePipe,
  SentenceCasePipe,
  SlugifyPipe,
  SplitPipe,
  TitleCasePipe,
  TrimPipe,
  TrimLeftPipe,
  TrimRightPipe,
  UpperCasePipe,
];

@NgModule({
  declarations: STRING_PIPES,
  exports: STRING_PIPES
})
export class NglrxStringPipesModule { }
