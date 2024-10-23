import { Field, ErrorMessage } from "formik";

const PriceAttendees = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Price and Expected Attendees</h2>

      {/* Price Field */}
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Event Price
        </label>
        <Field
          name="price"
          type="number"
          placeholder="Enter the event price"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm"
        />
        <ErrorMessage
          name="price"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Expected Attendees Field */}
      <div className="mb-4">
        <label
          htmlFor="expectedAttendees"
          className="block text-sm font-medium text-gray-700"
        >
          Expected Number of Attendees
        </label>
        <Field
          name="expectedAttendees"
          type="number"
          placeholder="Enter expected attendees"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm"
        />
        <ErrorMessage
          name="expectedAttendees"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default PriceAttendees;
