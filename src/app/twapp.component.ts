import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Store } from '@ngxs/store';
import { Bono } from './models/bono';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-root',
  templateUrl: './twapp.component.html',
  styleUrls: ['./twapp.component.css'],
})
export class TwAppComponent implements AfterViewInit, OnDestroy {
  // Initial Stream
  bono$ = new Subject<Bono>();

  // Intermediate Subscription
  twSub$ = new SubSink();

  constructor(private cdr: ChangeDetectorRef, private store: Store) {}
  // Check for ExpressionChangedAfterItHasBeenCheckedError
  ngAfterViewInit(): void {
    this.twSub$.add(this.toggleStatus());
    this.cdr.detectChanges();
  }
  ngOnDestroy(): void {
    this.twSub$.unsubscribe();
  }

  // Send Mssg to content.ts
  toggleStatus(): Subscription {
    return this.store.select((s) => s.bono.estado).subscribe(this.bono$);
  }
}
