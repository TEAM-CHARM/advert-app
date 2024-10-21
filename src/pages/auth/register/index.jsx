import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiSignUp } from '../../../services/auth';

const RegisterForm = () => {
  const { user } = useSelector((state) => ({ ...state }))
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState("user")
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [withVendorRole, setWithVendorRole] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    console.log(user)
    if (user)
      return navigate("/")
  }, [user])

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {};
    const formData = new FormData(e.target)

    const password1 = formData.get("password")
    const password2 = formData.get("confirmPassword")
    if (password1 !== password2) {
      toast.error("Passwords do not match!")
      return;
    }
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")

    data.email = formData.get("email")
    data.password = password1
    data.name = `${firstName} ${lastName}`
    // data.businessName = formData.get("businessName") || ""
    // data.businessEmail = formData.get("businessEmail") || ""
    // data.businessPhone = formData.get("businessPhone") || ""
    data.role = role

    try {
      setLoading(true)
      const res = await apiSignUp(data)
      if (res.status === 201 || res.status === 200) {
        // set the user in the local storage (eventlyUser)
        window.localStorage.setItem("eventlyUser", JSON.stringify(res.data))
        // dispatch the user 
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        // redirect to intended page or /
        const params = new URLSearchParams(location.search)
        const redirecteURL = params.get("redirect")
        if (redirecteURL) navigate(redirecteURL)
        else navigate('/')
        // Show toast notification
        toast.success(`Welcome ${res.data.name.split(" ")[0]}`)
      }
    } catch (error) {
      toast.error("Error creating an account")
      console.log("Error creating account", error)
    } finally {
      setLoading(false)
    }

  };

  const inputClasses = "shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  const handleRoleChange = (e) => {
    if (e.target.checked) setRole("vendor")
    setWithVendorRole(e.target.checked)
  }


  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Register for Evently</h2>
            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className={inputClasses}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className={inputClasses}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  // value={formData.lastName}
                  // onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={inputClasses}
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={inputClasses}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="******************"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className={inputClasses}
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="******************"
                name="confirmPassword"
                // value={formData.confirmPassword}
                // onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="role-check flex gap-3 align-middle items-center">
              <input type="checkbox" name="role" id="role" onChange={handleRoleChange} />
              <label className="block text-gray-700 text-sm font-bold " htmlFor="role">
                Also become a vendor
              </label>
            </div>

            {withVendorRole && <div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessName">
                  Business Name
                </label>
                <input
                  className={inputClasses}
                  id="businessName"
                  type="text"
                  placeholder="Business Name"
                  name="businessName"
                  // value={formData.businessName}
                  // onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessEmail">
                  Business Email
                </label>
                <input
                  className={inputClasses}
                  id="businessEmail"
                  type="text"
                  placeholder="Business Email"
                  name="businessEmail"
                  // value={formData.businessEmail}
                  // onChange={handleChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessPhone">
                  Business Phone
                </label>
                <input
                  className={inputClasses}
                  id="businessPhone"
                  type="text"
                  placeholder="Business Phone"
                  name="businessName"
                  // value={formData.businessPhone}
                  // onChange={handleChange}
                  required
                />
              </div>
            </div>}


            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Undraw Image */}
      <div className="w-full md:w-1/2 bg-primary-main-100 flex items-center justify-center p-6">
        <img
          src="/api/placeholder/500/500"
          alt="Registration illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default RegisterForm;