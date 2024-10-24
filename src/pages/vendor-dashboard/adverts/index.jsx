import React, { useEffect, useState } from "react";
import { apiDeleteVendorAd, apiGetVendorAds } from "../../../services/vendor";
import { toast } from "react-toastify";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import UpdateEvent from "../../../modals/update-event/UpdateEvent";

const Adverts = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openEventUpdateModal, setOpenEventUpdateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const fetchVendorEvents = async () => {
    try {
      setLoading(true);
      const res = await apiGetVendorAds();
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

  const handleEdit = (eventId) => {
    // Handle edit event
    console.log("Edit event with ID:", eventId);
  };

  const handleDelete = async (eventId) => {
    try {
      setLoading(true);
      const res = await apiDeleteVendorAd(eventId);
      console.log(res);
      toast.success("Event deleted successfully!");
      fetchVendorEvents();
    } catch (error) {
      console.log("Error deleting event", error);
      toast.error("Error deleting event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">My Events</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : events.length === 0 ? (
        <p className="text-center">No events found</p>
      ) : (
        <div className="flex flex-col gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex transition-transform transform hover:scale-105"
            >
              {/* Event Image */}
              <img
                src={`https://savefiles.org/${event.imageUrl}?shareable_link=${
                  import.meta.env.VITE_IMAGE_LINK
                }`}
                alt={event.title}
                className="w-1/3 h-full object-cover"
              />

              <div className="p-2 flex flex-col justify-between w-2/3">
                {/* Event Title */}
                <h2 className="text-md font-semibold text-gray-800 ">
                  {event.title}
                </h2>

                {/* Event Description */}
                <p className="text-gray-600 text-sm mb-2">
                  {event.description.length > 100
                    ? event.description.slice(0, 100) + "..."
                    : event.description}
                </p>

                {/* Event Date and Location */}
                <div className="text-gray-700 text-sm mb-4">
                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
                  </p>
                </div>

                {/* Price and Attendees */}
                <div className="text-gray-700 text-sm mb-4">
                  <p>
                    <span className="font-semibold">Price:</span> ${event.price}
                  </p>
                  <p>
                    <span className="font-semibold">Expected Attendees:</span>{" "}
                    {event.expectedAttendees}
                  </p>
                </div>

                {/* Edit and Delete Buttons */}
                <div className="flex gap-8 justify-end">
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setOpenEventUpdateModal(true);
                    }}
                    className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full"
                  >
                    <AiFillEdit className="mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-full"
                  >
                    <AiFillDelete className="mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedEvent && (
        <UpdateEvent
          event={selectedEvent}
          open={openEventUpdateModal}
          closeModal={() => setOpenEventUpdateModal(false)}
        />
      )}
    </div>
  );
};

export default Adverts;
