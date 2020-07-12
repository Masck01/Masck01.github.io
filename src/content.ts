import { of } from 'rxjs';
const button = of(1, 2, 3);

console.log('iniciando la deteccion del boton de puntos');
button.subscribe((el) => {
  console.log(el);
});
