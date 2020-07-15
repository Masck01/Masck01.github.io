import { timer } from 'rxjs';
const overtime = timer(5000, 30000);
const buscador = () =>
  document.querySelector('[data-test-selector=community-points-summary]');
const buscadorBtn = () =>
  document.querySelector(
    'button.tw-button--success.tw-interactive'
  ) as HTMLButtonElement;

const startSearchButton = () => {
  console.log('iniciando la deteccion del boton de puntos');
  const timetap = overtime.subscribe({
    next: () => {
      if (buscadorBtn() !== null) {
        console.log('button encontrado');
        buscadorBtn().click();
      } else {
        console.log('button no encontrado');
      }
    },
    error: (err) => {
      console.log(err);
    },
  });
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.executeButton === 'ejecutarboton') {
    startSearchButton();
    sendResponse(startSearchButton);
  }
});
