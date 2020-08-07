import { NgModule } from '@angular/core';

import { CombinePipe } from './combine/combine.pipe';
import { JoinPipe } from './join/join.pipe';

const ARRAY_PIPES = [
  CombinePipe,
  JoinPipe,
];

@NgModule({
  declarations: ARRAY_PIPES,
  exports: ARRAY_PIPES
})
export class NglrxArrayPipesModule { }
