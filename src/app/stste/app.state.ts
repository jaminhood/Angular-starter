import { CounterStateContract } from './counter/counter.feature';

export interface AppStateContract {
  counter: CounterStateContract;
}
