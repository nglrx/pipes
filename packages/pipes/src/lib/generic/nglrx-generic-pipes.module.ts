import { NgModule } from '@angular/core';

import { ReversePipe } from './reverse/reverse.pipe';
import { LengthPipe } from './length/length.pipe';
import { TypeOfPipe } from './type-of/type-of.pipe';

const GENERIC_PIPES = [
  ReversePipe,
  LengthPipe,
  TypeOfPipe
];

@NgModule({
  declarations: GENERIC_PIPES,
  exports: GENERIC_PIPES
})
export class NglrxGenericPipesModule { }
