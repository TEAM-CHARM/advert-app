/* eslint-disable react/prop-types */
// EventCarousel.jsx
import Slider from "react-slick";
import "./events-carousel.css";
import EventCard from "../cards/EventCard";

const EventsCarousel = ({ events }) => {
  const settings = {
    dots: false, // Disable dots if you want a cleaner look
    infinite: true, // Infinite loop
    speed: 600, // Smooth transition speed in ms
    slidesToShow: 3, // Show 3 events at a time
    slidesToScroll: 1, // Scroll one event at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    pauseOnHover: true, // Pause the carousel when hovered
    arrows: true, // Show navigation arrows
    // centerMode: true, // Center the current slide
    // centerPadding: "30px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 events on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 event on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper ">
      <Slider className="" {...settings}>
        {events.map((event, index) => {
          return (
            <div
              className="
            card w-full my-8 rounded-3xl bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] hover:shadow-[20px_20px_40px_#aaa,_-20px_-20px_40px_#ddd] hover:-translate-y-2 transition-transform transition-shadow duration-300 ease-in-out cursor-pointer
            "
              key={index}
            >
              <EventCard key={index} event={event} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default EventsCarousel;
