import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { concatMap, delay, map, tap } from 'rxjs/operators';
import { MatTabNav } from '@angular/material/tabs';
import { Course } from '../../../model/course';
import { createHttpObservable } from '../../../common/util';


@Component({
  selector: 'operators',
  templateUrl: './concatMap.component.html',
  styleUrls: ['../operators.component.css']
})
export class ConcatMapComponent implements OnInit, AfterViewInit {

  @ViewChild('button', { static: true }) button: ElementRef;
  @ViewChild('requestBtn', { static: true }) requestBtn: ElementRef;
  clickCount: number = 0;
  buttonClass: string[] = ['primary', 'accent', 'warn'];
  buttonClassIndex: number = 0;
  requestBtnClassIndex: number = 0;
  results: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent<any>(this.button.nativeElement, 'click')
      .pipe(
        tap(() => ++this.clickCount),
        tap(() => this.buttonClassIndex = this.buttonClassIndex < (this.buttonClass.length - 1) ? ++this.buttonClassIndex : 0),
        concatMap(() => this.multiply(this.clickCount)),
      )
      .subscribe();

    fromEvent<any>(this.requestBtn.nativeElement, 'click')
      .pipe(
        tap(() => this.requestBtnClassIndex = this.requestBtnClassIndex < (this.buttonClass.length - 1) ? ++this.requestBtnClassIndex : 0),
        concatMap(() => this.sendRequest()),
      )
      .subscribe();
  }

  multiply(number: number): Observable<number> {
    return from([10, 10, 10])
      .pipe(
        concatMap(num => of(num).pipe(
          delay(1000),
        )),
        tap(ten => this.results.push(ten * number)),
      )
  }

  sendRequest(): Observable<Course[]> {
    return createHttpObservable('/api/courses')
      .pipe(
        map(res => res['payload']),
        tap(console.log)
      );
  }

  onReset() {
    this.clickCount = 0;
    this.results = [];
  }

}
