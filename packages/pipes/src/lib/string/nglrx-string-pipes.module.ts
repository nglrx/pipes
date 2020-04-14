import { NgModule } from '@angular/core';

import { CharAtPipe } from './char-at/char-at.pipe';
import { TrimPipe } from './trim/trim.pipe';
import { TrimLeftPipe } from './trim-left/trim-left.pipe';
import { TrimRightPipe } from './trim-right/trim-right.pipe';

@NgModule({
  declarations: [
    CharAtPipe,
    TrimPipe,
    TrimLeftPipe,
    TrimRightPipe,
  ],
  exports: [
    CharAtPipe,
    TrimPipe,
    TrimLeftPipe,
    TrimRightPipe,
  ]
})
export class NglrxStringPipesModule { }
