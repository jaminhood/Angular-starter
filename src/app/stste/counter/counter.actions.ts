import { createAction, props } from '@ngrx/store';
import { ActionContract } from './counter.feature';

export const increment = createAction(
  '[Counter Component] Increment',
  props<ActionContract>()
);
export const decrement = createAction(
  '[Counter Component] Decrement',
  props<ActionContract>()
);
export const reset = createAction(
  '[Counter Component] Reset',
  props<ActionContract>()
);
