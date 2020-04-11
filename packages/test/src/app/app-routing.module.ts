import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule)
  },
  { path: '', redirectTo: 'pipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
