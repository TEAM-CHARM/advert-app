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
import NotFound from "./pages/not-found";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllAdverts from "./pages/AllAdverts";
import AddEvent from "./pages/vendor-dashboard/add-event";
import AddEventLayout from "./layouts/AddEventLayout";

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("eventlyUser"));
    console.log(storedUser);
    if (storedUser) {
      setUser(storedUser.user);
      dispatch({
        type: "LOGGED_IN_USER",
        payload: storedUser.user,
      });
    }
  }, [dispatch]);

  const router = createBrowserRouter([
    // Public routes/ pages
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "adverts", element: <AllAdverts /> },
        { path: "advert/:id", element: <AdvertDetails /> },
        { path: "auth/login", element: <Login /> },
        { path: "auth/register", element: <Register /> },
        { path: "auth/forgot-password", element: <ForgotPassword /> },
      ],
    },

    // User dashboard pages
    {
      path: "/dashboard",
      element: (
        <UserRoute>
          <UserDashboardLayout />
        </UserRoute>
      ),
      children: [{ index: true, element: <UserDashboard /> }],
    },

    // Vendor dashboard pages
    {
      path: "/vendor",
      element: (
        <VendorRoute>
          <VendorDashboardLayout user={user} />
        </VendorRoute>
      ),
      children: [
        { index: true, element: <VendorDashboard /> },
        { path: "advert/:id", element: <Advert /> },
        { path: "adverts", element: <Adverts /> },
      ],
    },
    {
      path: "/vendor/adverts/add",
      element: (
        <VendorRoute>
          <AddEventLayout />
        </VendorRoute>
      ),
      children: [{ index: true, element: <AddEvent /> }],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
