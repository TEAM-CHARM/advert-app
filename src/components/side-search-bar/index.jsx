import { useState, useEffect } from "react";
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

  // Function to perform the search (only one filter at a time)
  const performSearch = () => {
    let filters = {};

    // Check which filter is currently active and set only that in the filters object
    if (category && category !== "") {
      filters.category = category;
    } else if (dateRange.startDate || dateRange.endDate) {
      filters.startDate = dateRange.startDate;
      filters.endDate = dateRange.endDate;
    } else if (region) {
      filters.region = region;
    } else if (priceRange[0] > 0 || priceRange[1] < 1000) {
      filters.minPrice = priceRange[0];
      filters.maxPrice = priceRange[1];
    }

    onSearchResults(filters); // Pass the active filter to the parent component
  };

  // Reset filters when "All Categories" is selected
  const handleClearFilters = () => {
    setCategory("");
    setDateRange({ startDate: "", endDate: "" });
    setRegion("");
    setPriceRange([0, 1000]);
    onSearchResults({}); // Clear filters and search for everything
  };

  return (
    <div className="p-4 h-full rounded-3xl text-sm">
      <div className="flex justify-between align-middle items-center">
        <h2 className="text-sm font-bold mb-4">Filter Events</h2>
        <button
          className="flex justify-center align-middle hover:bg-primary-main hover:text-white items-center border border-primary-main p-1 px-2 rounded-full  gap-1 text-primary-main"
          onClick={handleClearFilters}
        >
          <MdOutlineClear />
          <span>Clear</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => {
            if (e.target.value === "") {
              handleClearFilters(); // Reset all filters when "All Categories" is selected
            } else {
              setCategory(e.target.value);
            }
          }}
          className="p-2 border rounded w-full"
        >
          <option value="">All Categories</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="arts">Arts</option>
        </select>
      </div>

      {/* Date Range Filter */}
      <div className="mb-4">
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
