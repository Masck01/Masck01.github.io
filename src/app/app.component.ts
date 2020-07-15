import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Mutador } from './mutador';
import { BonoService } from './bono.service';
import { fromEvent, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  // Event sources
  @ViewChild('botonBono') boton: ElementRef;
  onOffBtn: Observable<Event>;
  active = false;
  title = 'Twpoints';
  puntos =
    'document.querySelector("[data-test-selector=chat-input-buttons-container]")';
  puntos2 =
    'document.getElementsByClassName("tw-button tw-button--success tw-interactive")';
  puntos3 =
    'document.querySelector("[data-test-selector=community-points-summary]")';

  constructor(private bono: BonoService) {}
  ngAfterViewInit(): void {
    console.log('Desplegando el elemento', this.boton);
    this.onOffBtn = fromEvent(this.boton.nativeElement, 'click');
    this.onOffBtn.pipe(scan(this.toggleActive, this.active)).subscribe({
      next: (estado) => {
        this.active = estado;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('strm completado');
      },
    });
  }

  ngOnInit() {
    console.log('Script iniciado');
  }

  toggleActive(active: boolean) {
    return !active;
  }
  toggleStrmBtn() {
    console.log('Enviando executeButton');
    // chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
    //   chrome.tabs.sendMessage(
    //     result[0].id,
    //     { executeButton: 'ejecutarboton' },
    //     () => {
    //       console.log('Enviando executeButton');
    //     }
    //   );
    // });
    // console.log('Has tocado el boton', document.location.href);
  }
}
