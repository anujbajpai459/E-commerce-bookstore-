import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../public/list.json";
import Cards from "./Cards";

const Freebook = () => {
  const filterData = list.filter(
    (data) => data.category === "Free"
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Free Offered Courses
      </h1>

      <p className="mt-2 text-gray-600 dark:text-slate-300">
        Explore our collection of free books and start
        learning today.
      </p>

      <div className="mt-10">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="px-2">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;