import React from "react";
import { Outlet } from "react-router-dom";
import VendorSidebar from "../components/sidebars/VendorSidebar";

const VendorDashboardLayout = () => {
  return (
    <div className="main-body flex bg-background-light px-5 py-5">
      {/* Side Navigation */}
      <div className="w-64 fixed top-0 left-0 h-full overflow-auto p-4 bg-background-light ">
        <VendorSidebar />
      </div>

      {/* Main Views */}
      <div className="ml-64 w-full h-full  overflow-auto bg-background-light ">
        <Outlet />
      </div>
    </div>
  );
};

export default VendorDashboardLayout;
