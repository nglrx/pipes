import { NgModule } from '@angular/core';

import { TrimPipe } from './trim/trim.pipe';
import { TrimLeftPipe } from './trim-left/trim-left.pipe';

@NgModule({
  declarations: [
    TrimPipe,
    TrimLeftPipe,
  ],
  exports: [
    TrimPipe,
    TrimLeftPipe,
  ]
})
export class NglrxStringPipesModule { }
