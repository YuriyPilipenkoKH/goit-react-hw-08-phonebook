import { RootState } from "../store";


export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectIsFetching = (state: RootState) => state.auth.isFetching;

export const selectToken = (state: RootState) => state.auth.token;