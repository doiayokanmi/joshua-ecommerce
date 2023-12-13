import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }: { images: string[] }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    swipeToSlide: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };

  return (
    <>
    <div className="w-full">
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="min-w-full">
          <Image
            width={1200}
            height={400}
            alt={`NextUI Fruit Image with Zoom ${index + 1}`}
            src={image}
          />
        </div>
      ))}
    </Slider>
    </div>
    </>
  );
};

export default Carousel;
