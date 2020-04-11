import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericPipesComponent } from './generic-pipes.component';
import { LengthComponent } from './length/length.component';
import { ReverseComponent } from './reverse/reverse.component';

const routes: Routes = [
  {
    path: '',
    component: GenericPipesComponent,
    children: [
      {
        path: 'length',
        component: LengthComponent
      },
      {
        path: 'reverse',
        component: ReverseComponent
      },
      { path: '', redirectTo: 'length', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericPipesRoutingModule { }
