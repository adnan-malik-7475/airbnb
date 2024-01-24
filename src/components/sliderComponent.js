import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../components/imageComponent';

const SliderComponent = ({ images }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings} className="overflow-hidden">
        {images.map((image, index) => (
          <Image key={index} src={image} className="rounded-xl h-64 "alt={`Image ${index + 1}`} />
          
        ))}
       </Slider>
      <button
        className="absolute top-1/2 left-[2px]  -translate-y-1/2 bg-gray-200 border border-gray-300 p-2 rounded-full text-lg cursor-pointer"
        onClick={() => sliderRef.current.slickPrev()}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-[2px]  -translate-y-1/2 bg-gray-200 border border-gray-300 p-2 rounded-full text-lg cursor-pointer"
        onClick={() => sliderRef.current.slickNext()}
      >
        &#8250;
      </button>
    </div>
  );
};

export default SliderComponent;
