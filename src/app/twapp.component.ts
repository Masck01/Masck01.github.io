import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Mutador } from './mutador';
import { BonoService } from './bono.service';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { scan, tap } from 'rxjs/operators';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-root',
  templateUrl: './twapp.component.html',
  styleUrls: ['./twapp.component.css'],
})
export class TwAppComponent implements AfterViewInit {
  // Object actions
  actions = {
    start: 'initAction',
    stop: 'stopAction',
  };
  // Initial Stream
  active$ = new Subject<boolean>();

  // Intermediate Subscription
  sub$: Subscription;
  puntos =
    'document.querySelector("[data-test-selector=chat-input-buttons-container]")';
  puntos2 =
    'document.getElementsByClassName("tw-button tw-button--success tw-interactive")';
  puntos3 =
    'document.querySelector("[data-test-selector=community-points-summary]")';

  constructor(private cdr: ChangeDetectorRef) {}

  // Check for ExpressionChangedAfterItHasBeenCheckedError
  ngAfterViewInit(): void {
    this.sub$ = this.active$.asObservable().subscribe({
      next: (val) => {
        if (val) {
          console.log('init Search');
          this.initSearch();
        } else if (val === false) {
          this.stopSearch();
        } else {
          throw new Error();
        }
      },
      error: console.error,
      complete: () => console.log('Finalizado'),
    });
    this.cdr.detectChanges();
  }

  // Send Mssg to content.ts
  toggleStrmBtn(svgState: boolean) {
    this.active$.next(svgState);
  }
  initSearch() {
    chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
      chrome.tabs.sendMessage(
        result[0].id,
        { start: this.actions.start },
        (response) => {
          console.log('Enviando initSearch', response);
        }
      );
    });
  }
  stopSearch() {
    chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
      chrome.tabs.sendMessage(
        result[0].id,
        { stop: this.actions.stop },
        (response) => {
          console.log('Enviando stopSearch', response);
        }
      );
    });
  }
}
