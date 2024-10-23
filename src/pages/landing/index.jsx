import React, { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import AllEvents from "./sections/AllEvents";
import Categories from "./sections/Categories";
import { apiGetAdvertsSummary } from "../../services/advert";

const Landing = () => {
  const [eventsSummary, setEventsSummary] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEventsSummary = async () => {
    try {
      setLoading(true);
      const res = await apiGetAdvertsSummary();
      console.log("Adverts--->", res.data);
      setEventsSummary(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching events summary");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventsSummary();
  }, []);
  return (
    <div className="w-4/5 mx-auto">
      <Hero />
      <Categories />
      {eventsSummary ? (
        <>
          <AllEvents events={eventsSummary.trending} section="Trending Events" path="/adverts" />
          <AllEvents events={eventsSummary.upcoming} section="Upcoming Events" path="/adverts" />
          <AllEvents events={eventsSummary.today} section="Happening Today" path="/adverts" />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Landing;
