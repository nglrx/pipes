import { NgModule } from '@angular/core';

import { ReversePipe } from './reverse/reverse.pipe';
import { LengthPipe } from './length/length.pipe';

const GENERIC_PIPES = [
  ReversePipe,
  LengthPipe
];

@NgModule({
  declarations: GENERIC_PIPES,
  exports: GENERIC_PIPES
})
export class NglrxGenericPipesModule { }
