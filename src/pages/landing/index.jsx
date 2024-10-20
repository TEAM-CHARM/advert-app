import React from "react";
import Hero from "./sections/Hero";
import AllEvents from "./sections/AllEvents";
import Categories from "./sections/Categories";

const Landing = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Hero />
      <Categories />
      <AllEvents section="Top Events" path="/adverts" />
      <AllEvents section="Upcoming Events" path="/adverts" />
      <AllEvents section="All Events" path="/adverts" />
    </div>
  );
};

export default Landing;
