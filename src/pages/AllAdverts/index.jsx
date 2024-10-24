import { useEffect, useState } from "react";
import SideSearchFilter from "../../components/side-search-bar";
import EventCard from "../../components/cards/EventCard";
import { apiGetAdverts } from "../../services/advert";
import EventCardSkeleton from "../../components/feedbacks/EventCardSkeleton";
import { toast } from "react-toastify";

const cards = [1, 2, 3, 4, 5, 6];

const AllAdverts = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllEvents = async (filters) => {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        filter: JSON.stringify(filters),
        limit: 100,
      });

      const res = await apiGetAdverts(params);
      setEvents(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching events");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchResults = (filters) => {
    fetchAllEvents(filters); 
  };

  useEffect(() => {
    fetchAllEvents({}); 
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    setNavbarHeight(navbar.offsetHeight);
  }, [navbarHeight]);

  return (
    <div className="flex">
      {/* Left Side: Search Filter */}
      <div className="h-screen w-1/5">
        <div className="w-1/5 h-screen fixed top-0">
          <div style={{ height: navbarHeight }} />
          <SideSearchFilter onSearchResults={handleSearchResults} />
        </div>
      </div>

      {/* Right Side: Events Area */}
      <div className="w-4/5 p-10 overflow-y-auto">
        <div className="grid grid-cols-4 gap-8">
          {loading
            ? cards.map((card, index) => {
                return <EventCardSkeleton key={index} />;
              })
            : events?.map((event, index) => {
                return <EventCard key={index} event={event} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default AllAdverts;
