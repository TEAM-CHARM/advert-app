import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { apiSearchFilter } from "../../../services/advert.js";
import {Link} from 'react-router-dom'

const NavSearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const region = props.coords
    ? `Lat: ${props.coords.latitude}, Long: ${props.coords.longitude}`
    : "Greater Accra";

  const handleSearch = async (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const filter = JSON.stringify({
        title: { "$regex": query, "$options": "i" }
      });
      
      try {
        const response = await apiSearchFilter(filter);
        setResults(response.data);
        setShowDropdown(true); // Show dropdown when there are results
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      setShowDropdown(false); // Hide dropdown if search query is cleared
    }
  };

  const handleResultClick = (result) => {
    setSearchQuery(result.title); // Set the clicked result as the search query
    setShowDropdown(false); // Hide dropdown after selection
    // Additional action (e.g., navigating to the result page) can be handled here
  };

  return (
    <div className="flex items-center justify-center bg-[#F8F7FA] rounded-full text-sm max-w-xl relative">
      {/* Search bar and location combined */}
      <div className="relative flex items-center w-full border rounded-full shadow-sm">
        {/* Search Input */}
        <div className="relative flex items-center w-full">
          <FaSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search events"
            className="w-full px-10 py-2 text-gray-700 bg-[#F8F7FA] border-none rounded-l-full focus:outline-none"
            onChange={handleSearch}
            value={searchQuery}
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

      {/* Dropdown Search Results */}
      {showDropdown && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {results.map((result, index) => (
            <div  className="px-4 py-2 cursor-pointer hover:bg-gray-100">
            <Link
              key={index}
              to={`/advert/${result.id}`}
             
              onClick={() => handleResultClick(result)}
            >
              {result.title}
            </Link></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavSearchBar;
