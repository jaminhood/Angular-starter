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

export const deleteUser = createAction(
  `[Users Component] delete User`,
  props<{ id: string | number }>()
);
export const deleteUsersSuccess = createAction(
  `[Users Component] delete Success`,
  props<{ users: GetUsersContract }>()
);
export const deleteUsersError = createAction(
  `[Users Component] delete Error`,
  props<{ error: string }>()
);
