import { useState } from "react";
import { Formik, Form } from "formik";
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
    <div className=" h-screen flex flex-col justify-start gap-6 items-center align-middle glass p-8">
      <h1 className="font-semibold text-3xl text-gray-800">Create Event</h1>
      <div className="border flex flex-col h-full min-w-[60%] min-h-[70vh] rounded-2xl glass p-8 shadow-lg">
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
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="flex flex-col h-full justify-between">
              {step === 0 && (
                <ImageUpload setFieldValue={setFieldValue} values={values} />
              )}
              {step === 1 && <TitleDescription />}
              {step === 2 && <DateTime />}
              {step === 3 && <LocationPrice />}

              <div className="flex justify-between mt-4">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                  >
                    Previous
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-primary-main hover:bg-primary-dark text-white rounded-md"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Submit
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
