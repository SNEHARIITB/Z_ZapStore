export const getUsers = () =>
  JSON.parse(localStorage.getItem("users")) || [];

export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser"));

export const saveCurrentUser = (user) =>
  localStorage.setItem("currentUser", JSON.stringify(user));

// export const logout = () =>
//   localStorage.removeItem("currentUser");