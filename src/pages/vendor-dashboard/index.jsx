import React, { useEffect, useState } from 'react'
import { apiGetVendorAds } from '../../services/vendor';

const VendorDashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVendorEvents = async () => {
    try {
      setLoading(true);
      const res = await apiGetVendorAds()
      console.log("Adverts--->", res.data);
      setEvents(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendorEvents();
  }, []);
  

  return (
    <div><h1>Vendor dashboard overview</h1></div>
  )
}

export default VendorDashboard