import { apiClient } from "./config";

export const apiUpdateUser = async (payload) => {
  return await apiClient.patch(`/users/me`, payload);
};
