import React, { useEffect, useState } from "react";
import { EVENTS } from "../../../constants";
import toast from "react-hot-toast";
import EventCard from "../../../components/cards/EventCard";
import EventsCarousel from "../../../components/carousel/EventsCarousel";
import { Link } from "react-router-dom";
import { apiGetAdverts } from "../../../services/advert";
import EventCardSkeleton from "../../../components/feedbacks/EventCardSkeleton";

const cards = [1, 2, 3];
const AllEvents = ({ section, path, events, loading }) => {
  return (
    <div className="p-8 my-10">
      <div className="flex justify-between align-middle items-center">
        <h2 className="section-header">{section}</h2>{" "}
        <h6 className="text-sm underline text-primary-main hover:text-primary-dark body-text">
          <Link to={path}>View All</Link>
        </h6>
      </div>
      {loading ? (
        <div className="grid grid-cols-3 gap-8">
          {cards.map((card, index) => {
            return <EventCardSkeleton key={index} />;
          })}
        </div>
      ) : (
        <EventsCarousel events={events} />
      )}
    </div>
  );
};

export default AllEvents;
