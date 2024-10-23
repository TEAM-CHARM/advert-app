import { Field, ErrorMessage } from "formik";

const LocationDate = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Location and Date</h2>

      {/* Location Field */}
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Event Location
        </label>
        <Field
          name="location"
          type="text"
          placeholder="Enter the event location"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm"
        />
        <ErrorMessage
          name="location"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Date Field */}
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Event Date
        </label>
        <Field
          name="date"
          type="date"
          placeholder="Select event date"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm"
        />
        <ErrorMessage
          name="date"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default LocationDate;