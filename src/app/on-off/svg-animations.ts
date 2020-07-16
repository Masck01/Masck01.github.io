import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const svgAnimations = trigger('onOffSvg', [
  state(
    'wakeUp',
    style({
      stroke: '#0e2839',
    })
  ),
  state(
    'sleep',
    style({
      stroke: '#cccccc',
    })
  ),
  transition('wakeUp => sleep', [animate('1s')]),
  transition('sleep => wakeUp', [animate('0.5s')]),
]);
