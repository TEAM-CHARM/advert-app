/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.css"; // You can customize this CSS if needed.
import { IoLocation, IoPeopleCircleSharp } from "react-icons/io5";

const EventCard = ({ event }) => {
  const formatDate = (date) => {
    const options = {
      weekday: "short", // Fri
      month: "short", // Nov
      day: "numeric", // 1
      hour: "numeric", // 10
      minute: "numeric", // 00
      hour12: true, // AM/PM format
    };

    return new Date(date).toLocaleDateString("en-US", options);
  };
  return (
    <Link
      to={`/advert/${event._id}`}
      className="card w-full rounded-3xl bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_#aaa,_-20px_-20px_40px_#ddd] hover:-translate-y-2 transition-transform transition-shadow duration-300 ease-in-out cursor-pointer"
    >
      {/* Event Image */}
      <div className=" rounded-3xl">
        <img
          src={event.imageURL}
          alt={event.title}
          className="w-full rounded-3xl rounded-b-none h-48 object-cover "
        />
      </div>

      <div className="flex flex-col gap-2 p-3">
        {/* Event Title */}
        <h2 className="text-sm text-gray-800 font-bold">{event.title}</h2>

        {/* Event Date */}
        <p className="text-gray-600 text-[10px] ">
          {formatDate(event.date)} {/* Fri, Nov 1 • 10:00 AM */}
        </p>

        {/* Event Location */}
        <p className="flex align-middle items-start gap-1 text-gray-700 text-[10px] font-semibold mb-2">
          <IoLocation className="text-primary-dark" />
          <span>{event.location}</span>
        </p>

        {/* Event Price */}
        <p className="text-gray-800 text-xs font-bold mb-2">
          GHS {event.price.toFixed(2)}
        </p>

        {/* Organizer and attendees*/}

        <p className="text-gray-600 text-[10px]">
          <span className="font-semibold">{event.organizer.name}</span>
        </p>
        <div className="flex justify-end align-middle items-center ">
          <p className="flex  gap-2 items-center align-middle text-gray-600 text-[10px]">
            <IoPeopleCircleSharp className="text-primary-dark " />{" "}
            <span className="font-semibold">{event.attendees.length}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;