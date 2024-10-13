// src/components/Freebook.jsx
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/List.json';
import Slider from "react-slick";
import Cards from './Cards'; // Import the Cards component

const Freebook = () => {
  const filterData = list.filter((data) => data.Category === 'Free');

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll one card at a time
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="container mx-auto mb-8 p-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mt-4 mb-2">Free Offered Courses</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, perferendis! Dicta quaerat reprehenderit qui veniam itaque culpa obcaecati voluptatibus minima inventore? Quaerat inventore sunt tempora ipsum earum deleniti, reiciendis numquam.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((course, index) => (
              <div key={index} className="p-4">
                <Cards course={course} /> {/* Pass course data to Cards */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
