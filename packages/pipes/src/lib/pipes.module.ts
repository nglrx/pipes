import { NgModule } from '@angular/core';
import { GenericPipesModule } from './generic-pipes/generic-pipes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    GenericPipesModule
  ],
  exports: [
    GenericPipesModule
  ]
})
export class PipesModule { }
