import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboComponent } from './labo.component';
import { ConcatMapComponent } from './operators/concatMap/concatMap.component';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  {
    path: '',
    component: LaboComponent,
    children: [
      { path: 'operators', loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule)},
      { path: '', redirectTo: 'operators', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboRoutingModule { }
