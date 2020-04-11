import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipesComponent } from './pipes.component';

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
    children: [
      {
        path: 'generic',
        loadChildren: () => import('./generic-pipes/generic-pipes.module').then(m => m.GenericPipesModule)
      },
      { path: '', redirectTo: 'generic', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
