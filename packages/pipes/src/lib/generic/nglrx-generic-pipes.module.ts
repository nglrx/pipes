import { NgModule } from '@angular/core';

import { ReversePipe } from './reverse/reverse.pipe';
import { LengthPipe } from './length/length.pipe';

@NgModule({
  declarations: [
    ReversePipe,
    LengthPipe
  ],
  imports: [
  ],
  exports: [
    ReversePipe,
    LengthPipe
  ]
})
export class NglrxGenericPipesModule { }

export { ReversePipe } from './reverse/reverse.pipe';
export { LengthPipe } from './length/length.pipe';
