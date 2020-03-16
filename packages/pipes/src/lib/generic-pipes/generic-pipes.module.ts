import { NgModule } from '@angular/core';
import { ReversePipe } from './reverse/reverse.pipe';

@NgModule({
  declarations: [
    ReversePipe
  ],
  imports: [
  ],
  exports: [
    ReversePipe
  ]
})
export class GenericPipesModule { }
