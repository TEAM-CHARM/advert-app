import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
  return await apiClient.post(`/auth/register`, payload);
};
export const apiLogin = async (payload) => {
  return apiClient.post("/auth/login", payload);
};
export const generateToken = async (payload) => {
  return apiClient.post("/auth/token", payload);
};

export const apiGetUser = async (userId) => {
  return apiClient.get(`/auth/${userId}`);
};

export const getUsers = async () => {
  return apiClient.get(`/auth/users`);
};

export const apiLogout = async () => {
  return apiClient.post("/auth/logout");
};
