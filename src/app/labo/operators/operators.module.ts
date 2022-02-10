import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { OperatorsComponent } from './operators.component';
import { OperatorsRoutingModule } from './operators-routing.module';
import { ConcatMapComponent } from './concatMap/concatMap.component';
import { ExhaustMapComponent } from './exhaustMap/exhaustMap.component';
import { MergeMapComponent } from './mergeMap/mergeMap.component';
import { SwitchMapComponent } from './switchMap/switchMap.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    OperatorsComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    MergeMapComponent,
    SwitchMapComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule
  ]
})
export class OperatorsModule { }
