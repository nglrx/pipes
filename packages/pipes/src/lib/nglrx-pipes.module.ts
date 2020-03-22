import { NgModule } from '@angular/core';

import { NglrxGenericPipesModule } from './generic/nglrx-generic-pipes.module';

@NgModule({
  exports: [
    NglrxGenericPipesModule
  ]
})
export class NglrxPipesModule { }

export * from './generic/nglrx-generic-pipes.module';
