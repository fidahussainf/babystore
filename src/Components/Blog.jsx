import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Blog() {
  const blogs = [
    {
      title: "What to look in a baby high chair?",
      date: "Jun 21, 2021",
      time: "5 min read",
      content:
        "As a parent, finding the right babysitting chair to ensure your child will be safe and comfortable...",
      image: "./images/blog/blog1.png",
    },
    {
      title: "How to find the best baby bassinets?",
      date: "Jun 21, 2021",
      time: "8 min read",
      content:
        "As a parent, you want to ensure your baby is safe and comfortable. One of the most important things...",
      image: "./images/blog/blog2.png",
    },
    {
      title: "How to choose the best baby swing?",
      date: "Jun 21, 2021",
      time: "4 min read",
      content:
        "A baby swing is a magical device that will rock your little one to provide comfort like never before...",
      image: "./images/blog/blog3.png",
    },
    {
      title: "Two little ones - Get the right twin stroller?",
      date: "Jun 21, 2021",
      time: "9 min read",
      content:
        "Shopping for a twin stroller can be a daunting task. With so many styles, sizes, and options...",
      image: "./images/blog/blog1.png",
    },
  ];
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
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
          <h2 className="text-2xl font-semibold mb-4">Read Our Latest Blogs</h2>
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
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="p-8"
          >
            <div className="border bg-primary h-[410px] p-4 rounded-lg shadow-md">
            <img
              src={blog.image}
              alt={blog.title}
              className="  rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              {blog.date} • {blog.time}
            </p>
            <p className="text-base">{blog.content}</p>
          </div></div>
        ))}
      </Slider>
    </div>
  );
}

export default Blog;
