import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import {
  deleteUser,
  getUsersError,
  getUsersSuccess,
  loadUsers,
  setUser,
} from './user.actions';
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
  })),
  on(setUser, (state, { id }) => {
    let activeUser;

    id !== null
      ? (activeUser = state.users.filter((user) => user.id == id)[0])
      : (activeUser = id);

    return { ...state, activeUser };
  }),
  on(deleteUser, (state, { id }) => {
    return { ...state, users: state.users.filter((user) => user.id !== id) };
  })
);

export default createFeature({
  name: userFeatureKey,
  reducer,
  extraSelectors: ({ selectActiveUser }) => {
    const selectCurrentUserId = createSelector(
      selectActiveUser,
      (activeUser) => activeUser?.id
    );
    return { selectCurrentUserId };
  },
});
