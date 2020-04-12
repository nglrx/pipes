import { NgModule } from '@angular/core';

import { ReversePipe } from './reverse/reverse.pipe';
import { LengthPipe } from './length/length.pipe';

@NgModule({
  declarations: [
    ReversePipe,
    LengthPipe
  ],
  exports: [
    ReversePipe,
    LengthPipe
  ]
})
export class NglrxGenericPipesModule { }
