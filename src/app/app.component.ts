import { Component, OnInit } from '@angular/core';
import { Mutador } from './mutador';
import { BonoService } from './bono.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Twpoints';
  puntos =
    'document.querySelector("[data-test-selector=chat-input-buttons-container]")';
  puntos2 =
    'document.getElementsByClassName("tw-button tw-button--success tw-interactive")';
  puntos3 =
    'document.querySelector("[data-test-selector=community-points-summary]")';

  constructor(private bono: BonoService) {}

  ngOnInit() {
    this.bono.setPuntero();
    console.log('Script iniciado', this.bono.puntosButton);
  }

  load() {
    console.log('Has tocado el boton', document.location.href);
  }
}
