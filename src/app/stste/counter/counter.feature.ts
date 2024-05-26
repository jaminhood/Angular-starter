import { createFeature, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { CounterActionEnum } from './counter.enum';

export const counterFeatureKey = `counterFeature`;

export interface ActionContract {
  action: CounterActionEnum;
}

export interface CounterStateContract {
  count: number;
}

export const initialState: CounterStateContract & ActionContract = {
  count: 0,
  action: CounterActionEnum.reset,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, { action }) => {
    return { ...state, count: state.count + 1, action };
  }),
  on(decrement, (state, { action }) => {
    return { ...state, count: state.count - 1, action };
  }),
  on(reset, (state, { action }) => {
    return { ...state, count: 0, action };
  })
);

export const counterFeature = createFeature({
  name: counterFeatureKey,
  reducer: counterReducer,
  extraSelectors: ({}) => {
    return {};
  },
});
