import React from "react";
import Hero from "./sections/Hero";
import AllEvents from "./sections/AllEvents";
import Categories from "./sections/Categories";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <AllEvents section="Top Events" path="" />
      <AllEvents section="Upcoming Events" path="" />
      <AllEvents section="All Events" path="" />
    </div>
  );
};

export default Landing;
