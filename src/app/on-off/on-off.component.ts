import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Observable, fromEvent, Subscription, Subject } from 'rxjs';
import { svgAnimations } from './svg-animations';
import { switchMap } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { BonoStateChange } from '../../shared/bono.actions';
import { Bono } from '../models/bono';
import { SubSink } from 'subsink';

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
  svgSubject$ = new Subject<Bono>();

  // Intercept Subscriptions
  svgSub$ = new SubSink();

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

  constructor(private store: Store, private cdref: ChangeDetectorRef) {}

  // Prevent memory leaks
  ngOnDestroy(): void {
    this.svgSub$.unsubscribe();
  }

  // Directives of Subscription starts
  ngAfterViewInit(): void {
    this.svgSub$.add(this.bonoInitState(), this.toggleStatus());
    this.cdref.detectChanges();
  }

  toggleStatus(): Subscription {
    return fromEvent(this.layer.nativeElement, 'click')
      .pipe(switchMap(() => this.store.dispatch(new BonoStateChange())))
      .subscribe();
  }

  bonoInitState(): Subscription {
    return this.store.select((s) => s.bono.estado).subscribe(this.svgSubject$);
  }
}
