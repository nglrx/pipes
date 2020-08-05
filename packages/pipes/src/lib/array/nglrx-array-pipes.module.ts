import { NgModule } from '@angular/core';

import { JoinPipe } from './join/join.pipe';

const ARRAY_PIPES = [
  JoinPipe,
];

@NgModule({
  declarations: ARRAY_PIPES,
  exports: ARRAY_PIPES
})
export class NglrxArrayPipesModule { }
