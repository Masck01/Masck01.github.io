import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { svgAnimations } from './svg-animations';
import { scan, startWith } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-off',
  animations: [svgAnimations],
  templateUrl: './on-off.component.svg',
  styleUrls: ['./on-off.component.css'],
})
export class OnOffComponent implements AfterViewInit {
  // @Output() svgIcon$ = new Observable<EventEmitter<boolean>>();

  // Initial Stream
  svgClick$: Observable<Event>;
  // Front Stream
  svgState$ = new Observable<boolean>();
  @ViewChild('layer1') layer: ElementRef;
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
  ngAfterViewInit(): void {
    this.svgClick$ = fromEvent(this.layer.nativeElement, 'click');
    this.svgState$ = this.svgClick$.pipe(
      scan((acc) => !acc, true),
      startWith(true)
    );
    this.cdr.detectChanges();
  }
}
