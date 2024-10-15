import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/user-dashboard";
import VendorDashboard from "./pages/vendor-dashboard";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Landing from "./pages/landing";
import RootLayout from "./layouts/RootLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import VendorDashboardLayout from "./layouts/VendorDashboardLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import VendorRoute from "./routes/VendorRoute";
import UserRoute from "./routes/UserRoute";
import { USER } from "./constants";
import ForgotPassword from "./pages/auth/forgot-password";
import AdvertDetails from "./pages/advert-details";
import Advert from "./pages/vendor-dashboard/advert";
import Adverts from "./pages/vendor-dashboard/adverts";

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // get the current user and add to the global state
    let currentUser;

    const storedUser = localStorage.getItem("adveriumUser");
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
      setUser(parsedUser);
      console.log("User---->", parsedUser);
    } else {
      currentUser = USER;
      setUser(USER);
    }
    dispatch({
      type: "LOGGED_IN_USER",
      payload: currentUser,
    });
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "advert/:id", element: <AdvertDetails /> },
        { path: "auth/login", element: <Login /> },
        { path: "auth/register", element: <Register /> },
        { path: "auth/forgot-password", element: <ForgotPassword />},
      ],
    },

    {
      path: "/dashboard",
      element: (
        <UserRoute>
          <UserDashboardLayout user={user} />
        </UserRoute>
      ),
      children: [{ index: true, element: <UserDashboard /> }],
    },
    {
      path: "/vendor",
      element: (
        <VendorRoute>
          <VendorDashboardLayout user={user} />
        </VendorRoute>
      ),
      children: [
        { index: true, element: <VendorDashboard /> },
        { path: "advert/:id", element: <Advert />},
        { path: "adverts", element: <Adverts />},
      ],
    },
  ]);

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
