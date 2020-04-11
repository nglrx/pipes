import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglrxPipesModule } from '@nglrx/pipes';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';

@NgModule({
  declarations: [
    PipesComponent
  ],
  imports: [
    CommonModule,
    NglrxPipesModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }
