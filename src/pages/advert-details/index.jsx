import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EVENTS } from "../../constants";
import { GoDash } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const formatDate = (date) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

const AdvertDetails = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [organizerEvents, setOrganizerEvents] = useState([]);
  const [reserveSpotLoading , setReserveSpotLoading] = useState(false)
  const [followLoading, setFollowLoading] = useState(false)

  const { id } = useParams();

  const navigate = useNavigate();

  const intendedURL = window.location.pathname;
      

  const fetchEventsByOrganizer = async () => {
    try {
      setLoadingMore(true);
      // const res = await getEventsbyOrganizer(organizerId)
    } catch (error) {
      console.log("Error fetching organizer events", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const fetchEvent = async () => {
    try {
      setLoading(true);
      // const res = await getEventbyId(id)
      const res = EVENTS.find((event) => event._id === id);
      console.log(res);
      setEvent(res);
    } catch (error) {
      console.log("Error fetching Event", error);
      toast.error("Error fetching event");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const handleFollow = async() => {
    if (!user) {
      toast.error("Please login to be able to follow organizer");
      return navigate(`/auth/login?redirect=${encodeURIComponent(intendedURL)}`);
       // After login, check if there's a redirect URL
      //  const params = new URLSearchParams(location.search);
      //  const redirectURL = params.get("redirect");
    }else{
      try {
        setFollowLoading(true)
        // const res = await followOrganizer(organizerId)
        toast.success("Successful!")
      } catch (error) {
        toast.error("An error occured, please try again!")
        console.log(error);
      }finally{
        setFollowLoading(false)
      }
    }
  };

  const handleReserveSpot = async()=>{
    if (!user) {
      toast.error("Please login to be able to reserve a spot");
      return navigate(`/auth/login?redirect=${encodeURIComponent(intendedURL)}`);
    }else{
      try {
        setReserveSpotLoading(true)
        // const res = await reserveSpot()
      } catch (error) {
        toast.error("An error occured, please try again!")
        console.log(error);
      }finally{
        setReserveSpotLoading(false)
      }
    }
  }

  return (
    <>
      {!loading && event && (
        <div className="w-4/5 mx-auto p-6  text-xs">
          {/* Event Image */}
          <div className="relative mb-6">
            <img
              src={event.imageURL}
              alt={event.title}
              className="w-full h-72 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-100 text-white p-2 rounded">
              {formatDate(event.date)}
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-6 gap-8">
            <div className="col-span-4 bg-white p-6 rounded-2xl shadow-md space-y-6">
              <div className="title-description">
                <h1 className="text-4xl font-bold text-gray-800">
                  {event.title}
                </h1>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>

              {/* Date and Time */}
              <div className="date-time ">
                <h3 className="text-sm font-semibold text-gray-700">
                  Date and Time
                </h3>
                <p className="text-gray-600">{formatDate(event.date)}</p>
              </div>

              {/* Location */}
              <div className="location">
                <h3 className="text-sm font-semibold text-gray-700">
                  Location
                </h3>
                <p className="text-gray-600">{event.location}</p>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Tags</h3>
                <div className="categories flex space-x-2">
                  {event?.categories?.map((category, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-600 text-xs p-2 px-4 rounded-2xl"
                    >
                      {category?.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  Attending: <span>{event?.attendees?.length}</span>
                </h3>
              </div>

              {/* Organizer */}
              <div className="organizer flex items-start space-x-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">
                    Organized by
                  </h3>
                  <h5 className="text-gray-600">{event?.organizer?.name}</h5>
                </div>
                <div className="flex space-x-4">
                  <button className=" text-blue-500 py-2 px-4 rounded-lg hover:text-blue-700">
                    Contact
                  </button>
                  <button
                    onClick={handleFollow}
                    className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700"
                  >
                    Follow
                  </button>
                </div>
              </div>

              {/* More Events from Organizer */}
              <div className="more-events-from-organizer border-t ">
                <h3 className="text-lg font-semibold text-gray-700">
                  More Events by {event?.organizer?.name}
                </h3>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {organizerEvents?.map((orgEvent) => (
                  <div
                    key={orgEvent._id}
                    className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-all"
                  >
                    <img
                      src={orgEvent.imageURL}
                      alt={orgEvent.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h4 className="text-md font-semibold mt-2">
                      {orgEvent.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {formatDate(orgEvent.date)}
                    </p>
                  </div>
                ))}
              </div> */}
              </div>
            </div>
            <div className="col-span-2">
              <div className="border shadow-lg bg-white rounded-2xl flex flex-col gap-3 p-4">
                <div className="border border-blue-500 rounded-lg p-3 flex flex-col gap-3">
                  <div className="flex justify-between align-middle items-center font-bold text-gray-800">
                    <p>General Admission</p>
                    <div className="flex align-middle items-center gap-4">
                      <button className="p-2 bg-gray-200 rounded-2xl">
                        <GoDash />
                      </button>
                      <p>{1}</p>{" "}
                      <button className="p-2 bg-gray-200 rounded-2xl">
                        <IoMdAdd />
                      </button>
                    </div>
                  </div>
                  <div className="flex font-bold text-gray-800">
                    {event.price > 0 ? "GHS " + event.price : "Free"}
                  </div>
                </div>
                <button onClick={handleReserveSpot} className="rounded-2xl w-full  bg-primary-main py-2 hover:bg-primary-dark text-white">
                  Reserve spot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertDetails;
