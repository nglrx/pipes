import { NgModule } from '@angular/core';

import { AvgPipe } from './avg/avg.pipe';
import { MaxPipe } from './max/max.pipe';
import { MinPipe } from './min/min.pipe';
import { SumPipe } from './sum/sum.pipe';

const NUMBER_PIPES = [
  AvgPipe,
  MaxPipe,
  MinPipe,
  SumPipe,
];

@NgModule({
  declarations: NUMBER_PIPES,
  exports: NUMBER_PIPES
})
export class NglrxNumberPipesModule { }
