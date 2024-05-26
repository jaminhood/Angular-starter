import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(`[Users Component] Load All Users`);
export const getUsersSuccess = createAction(
  `[Users Component] get All Users Success`,
  props<{ users: GetUsersContract }>()
);
export const getUsersError = createAction(
  `[Users Component] get All Users Error`,
  props<{ error: string }>()
);

export const setUser = createAction(
  `[User Card Component] set single user`,
  props<{ id: string | number | null }>()
);

export const deleteUser = createAction(
  `[Users Component] delete User`,
  props<{ id: string | number }>()
);
