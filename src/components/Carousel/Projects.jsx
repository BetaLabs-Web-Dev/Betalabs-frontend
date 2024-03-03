import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "slider1.png", title: "Image 1", description: "Description 1" },
  { src: "slider1.png", title: "Image 2", description: "Description 2" },
  { src: "slider1.png", title: "Image 3", description: "Description 3" },
];

const Projects = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
              <p className="text-sm mb-4">{image.description}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded absolute bottom-4"
                onClick={() => {}}
              >
                Button
              </button>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={prevSlide}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
