import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiLogin } from "../../../services/auth";

const LoginForm = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (user) navigate(redirect || "/adverts");
  }, [user]);

  const params = new URLSearchParams(location.search);
  const redirectURL = params.get("redirect");
  console.log(redirectURL);

  useEffect(() => {
    if (redirectURL) setRedirect(redirectURL.toString());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {};
    const formData = new FormData(e.target);

    data.email = formData.get("email");
    data.password = formData.get("password");

    try {
      setLoading(true);
      const res = await apiLogin(data);
      if (res.status === 201 || res.status === 200) {
        // set the user in the local storage (eventlyUser)
        window.localStorage.setItem("eventlyUser", JSON.stringify(res.data));
        // dispatch the user
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data.user,
        });
        // redirect to intended page or /
        if (redirect) {
          navigate(redirect);
        } else navigate("/adverts");
        // Show toast notification
        toast.success(`Welcome ${res.data.user.name.split(" ")[0]}`);
      }
    } catch (error) {
      if (error.status === 401) {
        toast.error("Invalid email or password");
        return console.log("Error signing in", error);
      }
      return console.log("Error signing in", error);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Login to Evently
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={inputClasses}
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={inputClasses}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="******************"
                name="password"
                required
                disabled={loading}
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  disabled={loading}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className={`${
                  !loading
                    ? "bg-blue-500 hover:bg-blue-700 text-white"
                    : "bg-gray-300 text-gray-500"
                } font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            Don&apos;t have an account?{" "}
            <Link
              to={
                redirect
                  ? `/auth/register?redirect=${redirect}`
                  : `/auth/register`
              }
              className="text-blue-500 hover:text-blue-700"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Undraw Image */}
      <div className="w-full md:w-1/2 bg-blue-100 flex items-center justify-center p-6">
        <img
          src="/api/placeholder/500/500"
          alt="Login illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LoginForm;
