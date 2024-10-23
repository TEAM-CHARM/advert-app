import { apiClient } from "./config";

//Add an advert
export const apiCreateAdvert = async (payload) => await apiClient.post("/adverts", payload);

// Get all adverts
export const apiGetAdverts = async () => await apiClient.get("/adverts");

// Get a single advert
export const apiGetAdvert = async (id) => await apiClient.get(`/adverts/${id}`);

// Update an advert
export const apiUpdateAdvert = async (id, payload) => await apiClient.patch(`/adverts/${id}`, payload);

// Delete an advert
export const apiDeleteAdvert = async (id) => await apiClient.delete(`/adverts/${id}`);