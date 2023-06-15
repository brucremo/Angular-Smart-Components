import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
  state,
} from '@angular/animations';

export const transitionInOutSideways = trigger('transitionInOutSideways', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate(50),
  ]),
  transition('* => void', [
    animate(50, style({ transform: 'translateX(100%)' })),
  ]),
]);

export const transitionFadeIn = trigger('transitionFadeIn', [
    state('in', style({ opacity: "1" })),
    transition('* <=> *', [
      style({ opacity: "0.1" }),
      animate(80),
    ])
  ]);
  