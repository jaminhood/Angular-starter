import { createFeature, createReducer, on } from '@ngrx/store';
import { getUsersError, getUsersSuccess, loadUsers } from './user.actions';
import { UserStatusEnum } from './user.enum';

export const userFeatureKey = `userFeature`;

export interface UserStateContract {
  users: UserContract[];
  loading: UserStatusEnum;
  error: string | null;
  activeUser: UserContract | null;
}

export const initialState: UserStateContract = {
  users: [],
  loading: UserStatusEnum.pending,
  error: null,
  activeUser: null,
};

const reducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: UserStatusEnum.loading })),
  on(getUsersSuccess, (state, { users }) => ({
    ...state,
    loading: UserStatusEnum.success,
    users: users.data,
  })),
  on(getUsersError, (state, { error }) => ({
    ...state,
    loading: UserStatusEnum.error,
    error,
  }))
);

export default createFeature({
  name: userFeatureKey,
  reducer,
});
