import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateContract } from '../stste/app.state';
import { decrement, increment, reset } from '../stste/counter/counter.actions';
import { CounterActionEnum } from '../stste/counter/counter.enum';
import { counterFeature } from '../stste/counter/counter.feature';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
})
export class ManagementComponent {
  protected count$: Observable<number>;
  protected action$: Observable<string>;

  public constructor(private store: Store<AppStateContract>) {
    this.count$ = this.store.select(counterFeature.selectCount);
    this.action$ = this.store.select(counterFeature.selectAction);
  }

  protected increase() {
    this.store.dispatch(increment({ action: CounterActionEnum.increament }));
  }

  protected decrease() {
    this.store.dispatch(decrement({ action: CounterActionEnum.decreament }));
  }

  protected reset() {
    this.store.dispatch(reset({ action: CounterActionEnum.reset }));
  }
}
