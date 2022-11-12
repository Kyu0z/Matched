export const login = (state, { payload }) => {
  if (payload.token) {
    localStorage.setItem("token", payload.token);
  }
  return {
    ...state,
    isLoggedIn: true,
    user: payload,
    token: payload.token,
  };
};

export const logout = (state) => {
  localStorage.removeItem("token");
  return {
    ...state,
    isLoggedIn: false,
    user: null,
  };
};
