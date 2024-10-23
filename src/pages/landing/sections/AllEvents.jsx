import React, { useEffect, useState } from "react";
import { EVENTS } from "../../../constants";
import toast from "react-hot-toast";
import EventCard from "../../../components/cards/EventCard";
import EventsCarousel from "../../../components/carousel/EventsCarousel";
import { Link } from "react-router-dom";
import { apiGetAdverts } from "../../../services/advert";
const AllEvents = ({ section, path, events }) => {    

  return (
    <div className="p-8 my-10">
      <div className="flex justify-between align-middle items-center">
        <h2 className="section-header">{section}</h2>{" "}
        <h6 className="text-sm underline text-primary-main hover:text-primary-dark body-text">
          <Link to={path}>View All</Link>
        </h6>
      </div>
      <EventsCarousel events={events} />
    </div>
  );
};

export default AllEvents;
