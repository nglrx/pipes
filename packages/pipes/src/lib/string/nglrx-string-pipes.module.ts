import { NgModule } from '@angular/core';

import { TrimPipe } from './trim/trim.pipe';
import { TrimLeftPipe } from './trim-left/trim-left.pipe';
import { TrimRightPipe } from './trim-right/trim-right.pipe';

@NgModule({
  declarations: [
    TrimPipe,
    TrimLeftPipe,
    TrimRightPipe,
  ],
  exports: [
    TrimPipe,
    TrimLeftPipe,
    TrimRightPipe,
  ]
})
export class NglrxStringPipesModule { }
