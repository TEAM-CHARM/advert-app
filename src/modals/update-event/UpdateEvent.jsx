/* eslint-disable react/prop-types */
import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";
import { apiUpdateAd } from "../../services/vendor";

const inputStyle = "w-full px-4 py-2 border border-primary-light rounded-full";

const UpdateEvent = ({ open, event, closeModal, fetchData }) => {
  const [formData, setFormData] = useState({
    image: null,
    imageUrl: event?.imageUrl || "", // Initial image URL or empty if no image
  });
  const [loading, setLoading] = useState(false)

  // Prepopulate the image URL when the component mounts
  useEffect(() => {
    if (event?.imageUrl) {
      setFormData((prev) => ({
        ...prev,
        imageUrl: event.imageUrl,
      }));
    }
  }, [event]);

  // Handle image selection and preview update
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imageUrl: URL.createObjectURL(file), // Show preview of the selected image
      }));
    }
  };

  const handleUpdateEvent = async (data) => {
    try {
      setLoading(true)
      // API call to update the event
      const newFormData = new FormData();
      newFormData.append("title", data.title);
      newFormData.append("price", data.price);
      newFormData.append("location", data.location);
      newFormData.append("date", data.date);
      newFormData.append("category", data.category);
      newFormData.append("description", data.description);
      newFormData.append("expectedAttendees", data.expectedAttendees);
      
      const res = await apiUpdateAd(event.id, newFormData);
      
        toast.success("Event updated successfully");
        // fetchData(); // Refresh the event list
        closeModal();
      
    } catch (error) {
      console.log("Error updating event", error);
      toast.error("Error updating event");
    }finally{
      setLoading(false)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    // Append other form values
    const title = data.get("title");
    const price = data.get("price");
    const location = data.get("location");
    const date = data.get("date");
    const category = data.get("category");
    const description = data.get("description");
    const expectedAttendees = data.get("expectedAttendees");
    // const imageUrl = data.get("image");

    try {
      setLoading(true)
    const res = await apiUpdateAd(event.id, {title, price, location, date, category, description, expectedAttendees});
      toast.success("Event updated successfully");
      fetchData(); // Refresh the event list
      closeModal();

    
  } catch (error) {
    console.log("Error updating event", error);
    toast.error("Error updating event");
  }finally{
    setLoading(false)
  }



    // Append the selected image file if any
    // if (formData.image) {
    //   data.append("image", formData.image);
    // }
    // console.log(
    //   title,
    //   price,
    //   location,
    //   date,
    //   category,
    //   description,
    //   expectedAttendees,
    //   imageUrl
    // );

    // // Submit the updated form data
    // await handleUpdateEvent({
    //   title,
    //   price,
    //   location,
    //   date,
    //   category,
    //   description,
    //   expectedAttendees,
    //   imageUrl,
    // });
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setFormData({ image: null, imageUrl: event?.imageUrl || "" });
          closeModal();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="section-header mb-6">
                  Edit Event
                </Dialog.Title>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Image upload and preview */}
                    <div className="mt-4">
                      <label className="block mb-1 text-sm font-medium">
                        Upload New Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        className={inputStyle}
                        onChange={handleImageChange}
                        name="image"
                        disabled={loading}

                      />

                      <div className="mt-2">
                        <label className="block mb-1 text-sm font-medium">
                          Image Preview
                        </label>
                        {event?.imageUrl ? (
                          <img
                          src={`https://savefiles.org/${event.imageUrl}?shareable_link=${
                            import.meta.env.VITE_IMAGE_LINK
                          }`}
                            alt="Event preview"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        ) : (
                          <p>No image selected</p>
                        )}
                      </div>
                    </div>

                    {/* Event Title */}
                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Title*
                      </label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={event?.title}
                        className={inputStyle}
                        required
                        disabled={loading}

                      />
                    </div>

                    {/* Event Price */}
                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Price*
                      </label>
                      <input
                        type="number"
                        name="price"
                        defaultValue={event?.price}
                        className={inputStyle}
                        required
                        disabled={loading}

                      />
                    </div>

                    {/* Event Location */}
                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Location*
                      </label>
                      <input
                        type="text"
                        name="location"
                        defaultValue={event?.location}
                        className={inputStyle}
                        required
                        disabled={loading}

                      />
                    </div>

                    {/* Event Date and Time */}
                    <div className="mt-4">
                      <label className="block mb-1 text-sm font-medium">
                        Event Date and Time*
                      </label>
                      <input
                        type="datetime-local"
                        name="date"
                        defaultValue={
                          event?.date
                            ? new Date(event.date).toISOString().slice(0, 16)
                            : ""
                        }
                        className={inputStyle}
                        required
                        disabled={loading}

                      />
                    </div>

                    {/* Event Category */}
                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Category*
                      </label>
                      <select
                        name="category"
                        defaultValue={event?.category}
                        className={inputStyle}
                        required
                        disabled={loading}

                      >
                        <option value="music">Music</option>
                        <option value="business">Business</option>
                        <option value="technology">Technology</option>
                        <option value="sports">Sports</option>
                        <option value="arts">Arts</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Expected Attendees */}
                    <div>
                      <label className="block mb-1 text-sm font-medium">
                        Expected Attendees*
                      </label>
                      <input
                        type="number"
                        name="expectedAttendees"
                        defaultValue={event?.expectedAttendees}
                        className={inputStyle}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <label className="block mb-1 text-sm font-medium">
                      Description*
                    </label>
                    <textarea
                      name="description"
                      defaultValue={event?.description}
                      rows="4"
                      className={`${inputStyle} rounded-xl`}
                      required
                      disabled={loading}

                    />
                  </div>

                  {/* Submit button */}
                  <div className="mt-6 text-right">
                    <button
                        disabled={loading}

                      type="submit"
                      className="px-6 py-2 rounded-full bg-primary-dark hover:bg-gray-700 text-white font-semibold transition"
                    >
                      {loading?"Loading...": "Update Event"}
                    </button>
                    <button
                      type="button"
                      disabled={loading}
                      className="ml-4 text-red-600 px-6 py-2 rounded-full hover:bg-gray-100 transition"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateEvent;
