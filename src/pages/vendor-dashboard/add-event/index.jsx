import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ImageUpload from "./steps/ImageUpload";
import TitleDescription from "./steps/TitleDescription";
import LocationDate from "./steps/LocationDate";
import PriceAttendees from "./steps/PriceAttendees";
import { apiCreateAdvert } from "../../../services/advert";

const AddEvent = () => {
  const [step, setStep] = useState(0);

  // Function to move to the next step
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  // Validation schema for each step
  const validationSchemas = [
    Yup.object().shape({
      images: Yup.mixed().required("Images are required"),
    }),
    Yup.object().shape({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      category: Yup.string().required("Category is required"),
    }),
    Yup.object().shape({
      location: Yup.string().required("Location is required"),
      date: Yup.date().required("Date is required").nullable(),
    }),
    Yup.object().shape({
      price: Yup.number()
        .required("Price is required")
        .min(0, "Price cannot be negative"),
      expectedAttendees: Yup.number()
        .required("Expected attendees is required")
        .min(1, "There must be at least one attendee"),
    }),
  ];

  return (
    <div className="h-screen flex flex-col justify-start gap-6 items-center align-middle p-8">
      <h1 className="font-semibold text-3xl text-gray-800">Create Event</h1>
      <div className="border flex flex-col min-w-[60%] min-h-[70vh] rounded-2xl glass p-8 shadow-lg">
        <Formik
          initialValues={{
            images: null,
            title: "",
            description: "",
            category: "",
            location: "",
            date: "",
            price: 0,
            expectedAttendees: 1,
          }}
          validationSchema={validationSchemas[step]}
          onSubmit={async (values, { setSubmitting }) => {
            if (step === 3 && values.price !== 0) {
              const formData = new FormData();
              
              // Append form data
              formData.append("imageUrl", values.imageUrl);
              formData.append("title", values.title);
              formData.append("description", values.description);
              formData.append("category", values.category);
              formData.append("location", values.location);
              formData.append("date", values.date);
              formData.append("price", values.price);
              formData.append("expectedAttendees", values.expectedAttendees);

              try {
                // Send FormData to backend
                const res = await apiCreateAdvert(formData); 
                console.log("Response --->", res);
              } catch (error) {
                console.error("Error submitting form", error);
              } finally {
                setSubmitting(false);
              }
            } else {
              nextStep();
              setSubmitting(false); // Reset submit button state
            }
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="flex flex-col h-full justify-between">
              {/* Step Content */}
              {step === 0 && (
                <ImageUpload setFieldValue={setFieldValue} values={values} />
              )}
              {step === 1 && <TitleDescription />}
              {step === 2 && <LocationDate />}
              {step === 3 && <PriceAttendees />}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
                  >
                    Previous
                  </button>
                )}
                {step < 3 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddEvent;
