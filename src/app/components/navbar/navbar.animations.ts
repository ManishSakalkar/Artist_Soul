import {
  trigger,
  transition,
  style,
  animate,
  keyframes
} from '@angular/animations';

export const fadeSlide = trigger('fadeSlide', [
  transition(':enter', [
    animate(
      '600ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ])
    )
  ])
]);
