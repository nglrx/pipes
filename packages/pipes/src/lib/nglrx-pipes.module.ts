import { NgModule } from '@angular/core';

import { NglrxGenericPipesModule } from './generic/nglrx-generic-pipes.module';
import { NglrxStringPipesModule } from './string/nglrx-string-pipes.module';
import { NglrxNumberPipesModule } from './number/nglrx-number-pipes.module';

@NgModule({
  exports: [
    NglrxGenericPipesModule,
    NglrxStringPipesModule,
    NglrxNumberPipesModule,
  ]
})
export class NglrxPipesModule { }
