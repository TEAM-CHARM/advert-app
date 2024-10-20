/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineClear } from "react-icons/md";

const SideSearchFilter = ({ onSearchResults }) => {
  // Filter states
  const [category, setCategory] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  const [region, setRegion] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); // [minPrice, maxPrice]

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [category, dateRange, region, priceRange]);

  // Function to perform the search
  const performSearch = async () => {
    const filters = {
      category,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      region,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };

    try {
      const response = await axios.post("/api/search-events", filters);
      onSearchResults(response.data); // Pass the results to the parent component
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  return (
    <div className="p-4 h-full rounded-3xl text-[10px]">
      <div className="flex justify-between align-middle items-center">
        <h2 className="text-sm font-bold mb-4">Filter Events</h2>
        <button className="flex justify-center align-middle hover:bg-primary-main hover:text-white items-center border border-primary-main p-1 px-2 rounded-full  gap-1 text-primary-main">
          <MdOutlineClear />
          <span>clear</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-4 ">
        <label className="block mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="">All Categories</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="conference">Conference</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Date Range Filter */}
      <div className="mb-4 ">
        <label className="block mb-2">Date Range</label>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="w-full">
            <input
              type="date"
              value={dateRange.startDate}
              onChange={(e) =>
                setDateRange((prev) => ({ ...prev, startDate: e.target.value }))
              }
              className="p-2 border rounded w-full"
              placeholder="Start Date"
            />
          </div>
          <div className="w-full">
            <input
              type="date"
              value={dateRange.endDate}
              onChange={(e) =>
                setDateRange((prev) => ({ ...prev, endDate: e.target.value }))
              }
              className="p-2 border rounded w-full"
              placeholder="End Date"
            />
          </div>
        </div>
      </div>

      {/* Region Filter */}
      <div className="mb-4">
        <label className="block mb-2">Region</label>
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="p-2 border rounded w-full"
          placeholder="Enter region (e.g. Greater Accra)"
        />
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block mb-2">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="p-2 border rounded w-full"
            placeholder="Min Price"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="p-2 border rounded w-full"
            placeholder="Max Price"
          />
        </div>
      </div>
    </div>
  );
};

export default SideSearchFilter;
