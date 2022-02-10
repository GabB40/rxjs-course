import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { from, fromEvent, interval, Observable, of, timer, iif } from 'rxjs';
import { concatMap, delay, exhaustMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'operators',
  templateUrl: './operators.component.html',
  styleUrls: []
})
export class OperatorsComponent { }
