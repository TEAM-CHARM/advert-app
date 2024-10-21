/* eslint-disable react/prop-types */
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { apiUpdateUser } from "../../services/user";
import { useDispatch } from "react-redux";

const BecomeVendor = ({ open, user, closeModal }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleBecomeVendor = async (e) => {
    e.preventDefault();
    let data = {};
    const formData = new FormData(e.target);
    data.businessName = formData.get("businessName");
    data.businessEmail = formData.get("businessEmail");
    data.businessPhone = formData.get("businessPhone");
    data.role = "vendor";
    console.log(data);
    try {
      setLoading(true);
      const res = await apiUpdateUser(data);
      if (res.status === 201 || res.status === 200) {
        // set the user in the local storage (eventlyUser)
        window.localStorage.setItem("eventlyUser", JSON.stringify(res.data));
        // dispatch the user
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data.user,
        });

        // Show toast notification
        toast.success("You are now a vendor. Start creating events!");
        closeModal();
      }
    } catch (error) {
      toast.error("An error occured. Please try again!");
      console.log("Error creating vendor", error);
    } finally {
      setLoading(false);
    }
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
                <form onSubmit={handleBecomeVendor} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-gray-700">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your business name"
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="businessEmail"
                      required
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your business email"
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-gray-700">
                      Business Phone
                    </label>
                    <input
                      type="tel"
                      name="businessPhone"
                      required
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your business phone number"
                      disabled={loading}
                    />
                  </div>

                  {/* Terms and Agreement */}
                  <div className="space-y-2">
                    <label className="block text-gray-700 flex items-center">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        required
                        className="mr-2"
                        disabled={loading}
                      />
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 underline ml-1">
                        terms and conditions
                      </a>
                    </label>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end align-middle items-center gap-10 text-sm mt-6">
                    <button
                      disabled={loading}
                      onClick={closeModal}
                      className="text-gray-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`${
                        !loading
                          ? "bg-primary-main hover:bg-primary-dark text-white"
                          : "bg-gray-300 text-gray-500"
                      } font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
                    >
                      {loading ? "Loading..." : "Confirm"}
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

export default BecomeVendor;
