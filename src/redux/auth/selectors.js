export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUsername = (state) => state.auth.user.name;

export const selectError = (state) => state.auth.error;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
