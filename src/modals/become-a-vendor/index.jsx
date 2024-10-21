/* eslint-disable react/prop-types */
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const BecomeVendor = ({ open, user, closeModal }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhone: "",
    agreeToTerms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleBecomeVendor = () => {
    // Validate form
    let errors = {};
    if (!formData.businessName) errors.businessName = "Business name is required";
    if (!formData.businessEmail) errors.businessEmail = "Business email is required";
    if (!formData.businessPhone) errors.businessPhone = "Business phone is required";
    if (!formData.agreeToTerms)
      errors.agreeToTerms = "You must agree to the terms and conditions";
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitError("Please fix the errors and try again.");
      return;
    }

    // Perform the vendor subscription logic here
    console.log("Form submitted:", formData);
    // Close the modal after successful submission
    closeModal();
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
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
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-semibold text-gray-800 mb-6"
                >
                  Become a Vendor
                </Dialog.Title>

                <h2 className="text-lg mb-4">Fill in your business details</h2>

                {/* Form */}
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-gray-700">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your business name"
                    />
                    {formErrors.businessName && (
                      <p className="text-red-500 text-sm">
                        {formErrors.businessName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700">Business Email</label>
                    <input
                      type="email"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your business email"
                    />
                    {formErrors.businessEmail && (
                      <p className="text-red-500 text-sm">
                        {formErrors.businessEmail}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700">Business Phone</label>
                    <input
                      type="tel"
                      name="businessPhone"
                      value={formData.businessPhone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your business phone number"
                    />
                    {formErrors.businessPhone && (
                      <p className="text-red-500 text-sm">
                        {formErrors.businessPhone}
                      </p>
                    )}
                  </div>

                  {/* Terms and Agreement */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 flex items-center">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 underline ml-1">
                        terms and conditions
                      </a>
                    </label>
                    {formErrors.agreeToTerms && (
                      <p className="text-red-500 text-sm">
                        {formErrors.agreeToTerms}
                      </p>
                    )}
                  </div>
                </form>

                {/* Error Message */}
                {submitError && (
                  <p className="text-red-500 mt-4">{submitError}</p>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end align-middle items-center gap-10 text-sm mt-6">
                  <button onClick={closeModal} className="text-gray-500">
                    Cancel
                  </button>
                  <button
                    onClick={handleBecomeVendor}
                    className="p-2 px-3 bg-primary-main text-white hover:bg-primary-dark rounded-2xl"
                  >
                    Confirm
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BecomeVendor;
