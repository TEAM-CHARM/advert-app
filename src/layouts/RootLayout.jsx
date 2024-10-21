import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="content">
        <ScrollRestoration />
        <Navbar />

        <Outlet />
      </div>
      <div className="content">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
