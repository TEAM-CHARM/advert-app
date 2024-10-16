import { apiClient } from "./config";

//Add an advert
const postAdvert = async (payload) => await apiClient.post("/adverts", payload);

// Get all adverts
const getAdverts = async () => await apiClient.get("/adverts");

// Get a single advert
const getAdvert = async (id) => await apiClient.get(`/adverts/${id}`);

// Update an advert
const updateAdvert = async (id, payload) => await apiClient.patch(`/adverts/${id}`, payload);

// Delete an advert
const deleteAdvert = async (id) => await apiClient.delete(`/adverts/${id}`);