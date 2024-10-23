import { apiClient } from "./config";

export const apiGetVendorAds = async ()=>{
    return await apiClient.get("/vendor-ads")
}