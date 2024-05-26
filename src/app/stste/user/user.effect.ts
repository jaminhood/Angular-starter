import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { getUsersError, getUsersSuccess, loadUsers } from './user.actions';

@Injectable()
export class UserEEffects {
  constructor(private action$: Actions, private usersService: UsersService) {}

  getUsers$ = createEffect(() =>
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
}
