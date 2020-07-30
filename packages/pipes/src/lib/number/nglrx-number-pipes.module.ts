import { NgModule } from '@angular/core';

import { AbsPipe } from './abs/abs.pipe';
import { AvgPipe } from './avg/avg.pipe';
import { MaxPipe } from './max/max.pipe';
import { MinPipe } from './min/min.pipe';
import { PctPipe } from './pct/pct.pipe';
import { PowPipe } from './pow/pow.pipe';
import { SqrtPipe } from './sqrt/sqrt.pipe';
import { SumPipe } from './sum/sum.pipe';

const NUMBER_PIPES = [
  AbsPipe,
  AvgPipe,
  MaxPipe,
  MinPipe,
  PctPipe,
  PowPipe,
  SqrtPipe,
  SumPipe,
];

@NgModule({
  declarations: NUMBER_PIPES,
  exports: NUMBER_PIPES
})
export class NglrxNumberPipesModule { }
