import { apiClient } from "./config";

export const apiGetVendorAds = async ()=>{
    return await apiClient.get("/vendor-ads")
}

export const apiUpdateAd = async (id, payload)=>{
    return await apiClient.patch(`/vendor-ads/${id}`, payload)
}

export const apiDeleteVendorAd = async(id) =>{
    return await apiClient.delete(`/vendor-ads/${id}`)
}
