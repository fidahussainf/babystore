import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items, title }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container px-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        </div>
        <div className="gap-3 flex items-center justify-center ">
          <div className="flex items-center justify-center">
            <button
              className="bg-red h-10 flex items-center justify-center rounded-full w-10"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src="./images/card/ArrowLeft.png" alt="Arrow" />
            </button>
          </div>{" "}
          <div className="flex items-center justify-center">
            <button
              className="bg-red flex items-center justify-center h-10 rounded-full w-10"
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src="./images/card/ArrowRight.png" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {items.map((item, index) => (
          <div key={index} className="p-4">
            <div className="border h-[450px] rounded-lg shadow-sm">
              <div className=" relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-t-lg  w-full object-cover"
                />
                <img
                  src="./images/card/heart.png"
                  alt="Heart Icon"
                  className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
                />
              </div>
              <div className=" border-t-[1px] border-gray-500 border-opacity-10"></div>
              <div className="p-4">
                <h3 className="text-[13px] font-normal">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    {" "}
                    <p className="text-[10px] font-normal ">{item.price}</p>
                    {item.beforePrice && (
                      <p className="text-[10px] text-gray-400 line-through">
                        {item.beforePrice}
                      </p>
                    )}
                  </div>
                  <div>
                    <img src="./images/card/addcard.png" alt="addcard" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {item.discount && (
                    <span className=" text-green-600">{item.discount}</span>
                  )}
                  <p className="text-[#54A3FA]">{item.delivery}</p>
                </div>
                <div className="flex justify-between items-center ">
                  {item.priceMatch && (
                    <div className="flex pt-2 items-center">
                      <div className="bg-[#FE9132] p-2 flex gap-1 items-center rounded-full ">
                        <img src="./images/card/dolar.png" alt="" />
                        <p className="text-white font-light text-[8px]">
                          {item.priceMatch}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className=" flex">
                    <img
                      src="./images/card/star.png"
                      alt="star"
                      className="w-auto pr-1"
                    />
                    <p className=""> {item.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
