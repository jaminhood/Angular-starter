import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { CounterService } from '../../services/counter.service';
import * as counterActions from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}

  increment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.increment),
      switchMap(() =>
        from(
          this.counterService.increament().pipe(
            map((count) => counterActions.incrementSuccess({ count })),
            catchError((error) =>
              of(counterActions.incrementFailure({ error }))
            )
          )
        )
      )
    )
  );

  // Define other effects here...
}
