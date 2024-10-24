// CarouselComponent.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./hero-carousel.css"; // Custom styles (optional)
import { toast } from "react-toastify";
import { apiGetAdverts } from "../../services/advert";

const CarouselComponent = () => {

  const [topEvents, setTopEvents] = useState([])
  const [loading, setLoading] = useState(false)

  const filter = {
    category: "top"
  };
  // date:{
  //   $gte: "2024-10-23",
  //   $lte: "2024-10-23"
  // }
  const params = new URLSearchParams({
    filter: JSON.stringify(filter),
    limit: 10,
    skip: 0,
  });

  const fetchTopEvents = async()=>{
    try {
      setLoading(true)
      const res = await apiGetAdverts(params)
      console.log("top events-->", res.data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching top events")
    }finally{
      setLoading(true)
    }
  }
  useEffect(() => {
    fetchTopEvents()
  }, [])
  

  const settings = {
    dots: true, // Display dots below the carousel
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay delay in ms
    arrows: true, // Show previous/next arrows
    pauseOnHover: true, // Pause the autoplay on hover
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="Slide 1"
          />
          <h3 className="carousel-caption">Slide 1</h3>
        </div>
        <div className="carousel-slide">
          <img
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Slide 2"
          />
          <h3 className="carousel-caption">Slide 2</h3>
        </div>
        <div className="carousel-slide">
          <img
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Slide 3"
          />
          <h3 className="carousel-caption">Slide 3</h3>
        </div>
        <div className="carousel-slide">
          <img
            src="https://via.placeholder.com/800x400?text=Slide+4"
            alt="Slide 4"
          />
          <h3 className="carousel-caption">Slide 4</h3>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
