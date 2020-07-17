import { timer, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

class Content {
  // Stream that emits every 30sec
  overtime = timer(5000, 30000);

  // Intermediate Subscription
  sub$: Subscription;

  constructor() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.start === 'initAction') {
        this.startSearchPuntos();
        // Chrome Storage
        chrome.storage.local.set({ twpoints: 'active' }, () =>
          console.log('stored')
        );
        sendResponse(this.startSearchPuntos);
        console.log(message);
      }
      if (message.stop === 'stopAction') {
        this.stopSearchPuntos();
        // Before remove
        chrome.storage.local.get('twpoints', (keys) => console.log(keys));
        // Chrome remove key twpoint
        chrome.storage.local.remove('twpoints', () =>
          console.log('removed twpoints')
        );
        sendResponse(this.stopSearchPuntos);
        console.log(message);
      }
    });
  }

  // Searcher for Box puntos
  buscador() {
    return document.querySelector(
      '[data-test-selector=community-points-summary]'
    );
  }
  // Button puntos
  buscadorBtn() {
    return document.querySelector(
      'button.tw-button--success.tw-interactive'
    ) as HTMLButtonElement;
  }
  // Start search for puntos button
  startSearchPuntos() {
    console.log('iniciando la deteccion del boton de puntos');
    this.sub$ = this.overtime
      .pipe(
        tap((val) => {
          console.log('value desde tab', val);
        })
      )
      .subscribe({
        next: () => {
          if (this.buscadorBtn() !== null) {
            console.log('button encontrado');
            this.buscadorBtn().click();
          } else {
            console.log('button no encontrado');
          }
        },
        error: () => console.error,
      });
  }

  stopSearchPuntos() {
    this.sub$.unsubscribe();
    console.log('terminando deteccion de puntos');
  }
}

const appContent = new Content();
