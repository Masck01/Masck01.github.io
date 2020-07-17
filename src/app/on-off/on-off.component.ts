import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { svgAnimations } from './svg-animations';
import { scan, startWith, switchMap, tap } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-off',
  animations: [svgAnimations],
  templateUrl: './on-off.component.svg',
  styleUrls: ['./on-off.component.css'],
})
export class OnOffComponent implements AfterViewInit, OnDestroy {
  // Initial Stream
  svgClick$: Observable<Event>;
  // Front Stream
  @Output() svgSubject$ = new EventEmitter<boolean>();

  // Intermediate Subscription
  svgState$: Subscription;

  // Child ref (svg)
  @ViewChild('layer1') layer: ElementRef;

  // States of Smile
  feliz = {
    d:
      'm 17.712164,11.468389 a 7.6833334,6.5297031 0 0 1 -3.841667,5.654888 7.6833334,6.5297031 0 0 1 -7.6833334,0 7.6833334,6.5297031 0 0 1 -3.8416665,-5.654889 l 7.6833339,1e-6 z',
    t: 'scale(1)',
  };
  triste = {
    d:
      'm 17.712164,-17.999853 a 7.6833334,6.5297031 0 0 1 -3.841667,5.654889 7.6833334,6.5297031 0 0 1 -7.6833334,0 7.6833334,6.5297031 0 0 1 -3.8416665,-5.654889 l 7.6833339,0 z',
    t: 'scale(1,-1)',
  };

  constructor(private cdr: ChangeDetectorRef) {}

  // Prevent memory leaks
  ngOnDestroy(): void {
    this.svgState$.unsubscribe();
  }

  // Directives of Subscription starts
  ngAfterViewInit(): void {
    this.svgClick$ = fromEvent(this.layer.nativeElement, 'click');
    this.svgState$ = this.svgClick$
      .pipe(
        startWith(true),
        scan((acc) => {
          this.svgSubject$.emit(acc);
          return !acc;
        }, true),
        switchMap(() => this.svgSubject$.asObservable())
      )
      .subscribe();

    // Expresion changed after it was checked. Solver
    this.cdr.detectChanges();
  }
}
