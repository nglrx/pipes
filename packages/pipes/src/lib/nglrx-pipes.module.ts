import { NgModule } from '@angular/core';

import { NglrxArrayPipesModule } from './array/nglrx-array-pipes.module';
import { NglrxGenericPipesModule } from './generic/nglrx-generic-pipes.module';
import { NglrxNumberPipesModule } from './number/nglrx-number-pipes.module';
import { NglrxStringPipesModule } from './string/nglrx-string-pipes.module';

@NgModule({
  exports: [
    NglrxArrayPipesModule,
    NglrxGenericPipesModule,
    NglrxNumberPipesModule,
    NglrxStringPipesModule,
  ]
})
export class NglrxPipesModule { }
