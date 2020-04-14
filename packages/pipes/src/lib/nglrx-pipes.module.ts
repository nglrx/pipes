import { NgModule } from '@angular/core';

import { NglrxGenericPipesModule } from './generic/nglrx-generic-pipes.module';
import { NglrxStringPipesModule } from './string/nglrx-string-pipes.module';

@NgModule({
  exports: [
    NglrxGenericPipesModule,
    NglrxStringPipesModule
  ]
})
export class NglrxPipesModule { }
