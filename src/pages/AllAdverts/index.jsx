import { useEffect, useState } from "react";
import SideSearchFilter from "../../components/side-search-bar";
import { EVENTS } from "../../constants";
import EventCard from "../../components/cards/EventCard";

const AllAdverts = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    setNavbarHeight(navbar.offsetHeight);
  }, [navbarHeight]);

  return (
    <div className="flex">
      {/* Left Side: Search Filter */}
      <div className=" h-screen w-1/5 ">
        <div className=" w-1/5 h-screen fixed   top-0">
          <div style={{ height: navbarHeight }} className="" />
          <SideSearchFilter />
        </div>
      </div>

      {/* Right Side: Events Area */}
      <div className="w-4/5 p-10 overflow-y-auto">
        <div className="grid grid-cols-4 gap-8">
          {EVENTS.map((event, index) => {
            return <EventCard key={index} event={event} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllAdverts;
