import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ImageUpload from "./steps/ImageUpload";
import TitleDescription from "./steps/TitleDescription";
import DateTime from "./steps/DateTime";
import LocationPrice from "./steps/LocationPrice";
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
    }),
    Yup.object().shape({
      location: Yup.string().required("Location is required"),
      date: Yup.date().required("Date is required"),
    }),
    Yup.object().shape({
      price: Yup.number().required("Price is required"),
    }),
  ];
  return (
    <Formik
      initialValues={{
        images: null,
        title: "",
        description: "",
        location: "",
        date: "",
        price: 0,
      }}
      validationSchema={validationSchemas[step]}
      onSubmit={(values) => {
        console.log("Form submitted", values);
        // Submit logic here
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {step === 0 && <ImageUpload />}
          {step === 1 && <TitleDescription />}
          {step === 2 && <DateTime />}
          {step === 3 && <LocationPrice />}

          <div className="flex justify-between mt-4">
            {step > 0 && (
              <button type="button" onClick={prevStep}>
                Previous
              </button>
            )}
            {step < 3 ? (
              <button type="button" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddEvent;
