import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboComponent } from '../labo.component';
import { ConcatMapComponent } from './concatMap/concatMap.component';
import { ExhaustMapComponent } from './exhaustMap/exhaustMap.component';
import { MergeMapComponent } from './mergeMap/mergeMap.component';
import { SwitchMapComponent } from './switchMap/switchMap.component';

const routes: Routes = [
  { path: 'concatMap', component: ConcatMapComponent },
  { path: 'concatMap', component: ConcatMapComponent },
  { path: 'exhaustMap', component: ExhaustMapComponent },
  { path: 'mergeMap', component: MergeMapComponent },
  { path: 'switchMap', component: SwitchMapComponent },
  // { path: '', redirectTo: 'concatMap', pathMatch: 'full'},
  // { path: '**', redirectTo: 'concatMap', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
