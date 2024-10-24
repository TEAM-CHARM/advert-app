import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import ImageUpload from "./steps/ImageUpload";
import TitleDescription from "./steps/TitleDescription";
import LocationDate from "./steps/LocationDate";
import PriceAttendees from "./steps/PriceAttendees";
import { apiCreateAdvert } from "../../../services/advert";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const [step, setStep] = useState(0);
  const { user } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

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

  // Animation variants for step transitions
  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="h-screen flex flex-col justify-start gap-6 items-center align-middle p-8">
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
            if (step === 3) {
              const formData = new FormData();
              formData.append("imageUrl", values.imageUrl);
              formData.append("title", values.title);
              formData.append("description", values.description);
              formData.append("category", values.category);
              formData.append("location", values.location);
              formData.append("date", values.date);
              formData.append("price", values.price);
              formData.append("expectedAttendees", values.expectedAttendees);
              formData.append("organizer", user.id);

              try {
                const res = await apiCreateAdvert(formData);
                if (res.status === 200 || res.status === 201) {
                  navigate("/vendor");
                  toast.success("Event created successfully");
                }
              } catch (error) {
                console.error("Error submitting form", error);
              } finally {
                setSubmitting(false);
              }
            } else {
              nextStep();
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="flex flex-col h-full justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={stepVariants}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  {step === 0 && (
                    <ImageUpload setFieldValue={setFieldValue} values={values} />
                  )}
                  {step === 1 && <TitleDescription />}
                  {step === 2 && <LocationDate />}
                  {step === 3 && <PriceAttendees />}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className={`flex mt-4 ${step > 0 ? "justify-between" : "justify-end"}`}>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-2xl"
                  >
                    Previous
                  </button>
                )}
                {step < 3 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-primary-main hover:bg-primary-dark text-white rounded-full"
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
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
