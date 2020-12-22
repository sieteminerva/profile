import { trigger, animate, style, group, query, transition } from '@angular/animations';

export const verticalSlideTransition = trigger('verticalSlide', [
  transition(':decrement', [
    query(':enter, :leave', style({ position: 'fixed', height: '100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
      ], { optional: true }),
    ])
  ]),
  transition(':increment', [
    group([
      query(':enter, :leave', style({ position: 'fixed', height: '100%' })
        , { optional: true }),
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);

export const horizontalSlideTransition = trigger('horizontalSlide', [
  transition(':decrement', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),
  transition(':increment', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' })
        , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);
