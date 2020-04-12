import { NgModule } from '@angular/core';

import { TrimPipe } from './trim/trim.pipe';

@NgModule({
  declarations: [
    TrimPipe,
  ],
  exports: [
    TrimPipe,
  ]
})
export class NglrxStringPipesModule { }
