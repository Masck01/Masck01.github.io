import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BonoService {
  public puntosButton: Element;

  public setPuntero() {
    this.puntosButton = document.querySelector(
      '[data-test-selector=chat-input-buttons-container]'
    );
  }
}
