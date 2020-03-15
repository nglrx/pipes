import { NgModule } from '@angular/core';
import { StringPipesModule } from './string-pipes/string-pipes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    StringPipesModule
  ],
  exports: [
    StringPipesModule
  ]
})
export class PipesModule { }
