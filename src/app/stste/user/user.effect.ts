import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { UsersService } from '../../services/users.service';
import {
  deleteUser,
  getUsersError,
  getUsersSuccess,
  loadUsers,
} from './user.actions';
import userFeature from './user.feature';

@Injectable()
export class UserEEffects {
  constructor(
    private action$: Actions,
    private usersService: UsersService,
    private store: Store
  ) {}

  getUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        from(this.usersService.getAll()).pipe(
          map((users: GetUsersContract) => getUsersSuccess({ users })),
          catchError((error) => of(getUsersError({ error })))
        )
      )
    )
  );

  deleteUsers$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(deleteUser),
        withLatestFrom(this.store.select(userFeature.selectUsers)),
        switchMap(([action, id]) =>
          from(this.usersService.delete<UserContract[] | { id: any }>(id))
        )
      ),
    { dispatch: false }
  );
}
