import React, { useEffect, useState } from "react";
import { EVENTS } from "../../../constants";
import toast from "react-hot-toast";
import EventCard from "../../../components/cards/EventCard";
import EventsCarousel from "../../../components/carousel/EventsCarousel";
import { Link } from "react-router-dom";
const AllEvents = ({ section, path }) => {
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllEvents = async () => {
    try {
      setLoading(true);
      // const res = await getAllEvents()
      setAllEvents(EVENTS);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching all events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <div className="p-8 my-10">
      <div className="flex justify-between align-middle items-center">
        <h2 className="section-header">{section}</h2>{" "}
        <h6 className="text-sm underline text-primary-main hover:text-primary-dark body-text">
          <Link to={path}>View All</Link>
        </h6>
      </div>
      <EventsCarousel events={allEvents} />
    </div>
    // <div className="grid grid-cols-4 gap-8 place-items-center items-start">
    //   {allEvents &&
    //     allEvents.map((event, index) => {
    //       return <EventCard key={index} event={event} />;
    //     })}
    // </div>
  );
};

export default AllEvents;
