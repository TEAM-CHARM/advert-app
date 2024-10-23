/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";

const ImageUpload = ({ setFieldValue, values }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (values.image && values.image.length > 0) {
      const imagePreview = URL.createObjectURL(values.image[0]);
      setPreview(imagePreview);
    }
  }, [values.image]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setPreview(imagePreview);
      setFieldValue("image", [file]); // Store a single image in Formik state
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload Event Image</h2>
      <div className="mb-4">
        <Field name="image">
          {({ field }) => (
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          )}
        </Field>
        <ErrorMessage
          name="image"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Image Preview */}
      {preview && (
        <div className="relative mt-4">
          <img
            src={preview}
            alt="Image Preview"
            className="w-full h-[400px] object-cover rounded-md shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
