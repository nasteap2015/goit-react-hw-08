export const selectIsLogged = (state) => state.auth.isLoggedIn;

export const selectUsername = (state) => state.auth.user.name;

export const selectError = (state) => state.auth.error;
