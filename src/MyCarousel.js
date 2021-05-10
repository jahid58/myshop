import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./images/amzon2.gif";
import img2 from "./images/Amazon-1.jpg";
import img3 from "./images/amzon-3.jpg";
const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval="3000">
      <div>
        <img src={img1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={img2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={img3} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
