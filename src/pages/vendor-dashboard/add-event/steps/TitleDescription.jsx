import { Field, ErrorMessage } from "formik";

const TitleDescription = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Add Title and Description</h2>

      {/* Title Field */}
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Event Title
        </label>
        <Field
          name="title"
          type="text"
          placeholder="Enter the event title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm"
        />
        <ErrorMessage
          name="title"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Description Field */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Event Description
        </label>
        <Field
          as="textarea"
          name="description"
          placeholder="Provide a detailed description of the event"
          rows="6"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm resize-none"
        />
        <ErrorMessage
          name="description"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
      {/* Description Field */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Event Description
        </label>
        <Field
          as="textarea"
          name="description"
          placeholder="Provide a detailed description of the event"
          rows="6"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-main focus:border-primary-main sm:text-sm resize-none"
        />
        <ErrorMessage
          name="description"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default TitleDescription;
