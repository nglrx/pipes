import { NgModule } from '@angular/core';

import { MaxPipe } from './max/max.pipe';
import { MinPipe } from './min/min.pipe';

const NUMBER_PIPES = [
  MaxPipe,
  MinPipe,
];

@NgModule({
  declarations: NUMBER_PIPES,
  exports: NUMBER_PIPES
})
export class NglrxNumberPipesModule { }
