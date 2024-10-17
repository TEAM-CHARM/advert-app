import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

// import { geolocated } from "react-geolocated";

const NavSearchBar = (props) => {
  const region = props.coords
    ? `Lat: ${props.coords.latitude}, Long: ${props.coords.longitude}`
    : "Greater Accra";

  return (
    <div className="flex items-center justify-center bg-[#F8F7FA] rounded-full text-xm max-w-xl">
      {/* Search bar and location combined */}
      <div className="relative flex items-center w-full  border rounded-full shadow-sm">
        {/* Search Input */}
        <div className="relative flex items-center w-full">
          <FaSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search events"
            className="w-full px-10 py-2  text-gray-700 bg-[#F8F7FA] border-none rounded-l-full focus:outline-none"
          />
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-400"></div>

        {/* Location Input */}
        <div className="relative flex items-center">
          <FaMapMarkerAlt className="ml-4 text-gray-500" />
          <input
            type="text"
            value={region}
            readOnly
            className="px-4 py-2 text-gray-700 bg-[#F8F7FA] border-none rounded-r-full focus:outline-none"
          />
        </div>

        {/* Search Button */}
        <button className="absolute right-1 p-2 text-white bg-primary-main rounded-full focus:outline-none hover:bg-primary-dark">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default NavSearchBar;
