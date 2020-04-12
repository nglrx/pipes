import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglrxGenericPipesModule } from '@nglrx/pipes';

import { GenericPipesRoutingModule } from './generic-pipes-routing.module';
import { GenericPipesComponent } from './generic-pipes.component';
import { LengthComponent } from './length/length.component';
import { ReverseComponent } from './reverse/reverse.component';

@NgModule({
  declarations: [
    GenericPipesComponent,
    LengthComponent,
    ReverseComponent
  ],
  imports: [
    CommonModule,
    NglrxGenericPipesModule,
    GenericPipesRoutingModule
  ]
})
export class GenericPipesModule { }
