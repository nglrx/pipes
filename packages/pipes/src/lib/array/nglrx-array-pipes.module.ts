import { NgModule } from '@angular/core';

import { CombinePipe } from './combine/combine.pipe';
import { CopyWithinPipe } from './copyWithin/copy-within.pipe';
import { FillPipe } from './fill/fill.pipe';
import { JoinPipe } from './join/join.pipe';

const ARRAY_PIPES = [
  CombinePipe,
  CopyWithinPipe,
  FillPipe,
  JoinPipe,
];

@NgModule({
  declarations: ARRAY_PIPES,
  exports: ARRAY_PIPES
})
export class NglrxArrayPipesModule { }
