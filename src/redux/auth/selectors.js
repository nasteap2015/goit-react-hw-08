export const selectIsLogged = (state) => state.auth.isLoggedIn;

export const selectUsername = (state) => state.auth.user.name;
