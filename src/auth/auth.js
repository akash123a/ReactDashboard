export const isAuthenticated = () => {
  return localStorage.getItem("admin_token");
};

export const login = (token) => {
  localStorage.setItem("admin_token", token);
};

export const logout = () => {
  localStorage.removeItem("admin_token");
};
