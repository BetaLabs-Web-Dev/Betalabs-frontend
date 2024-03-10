import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Projects.css";

function Projects() {
  const images = [
    "slider1.png",
    "slider1.png",
    "slider1.png",
    "slider1.png",
  ];

  return (
    <>
      <div className="Slider m-[20px]">
        <h1 className="text-[3vw] text-[#01DEDE] font-semibold m-8">Projects</h1>
        <div>
          <Carousel showStatus={false} showIndicators={false}>
            {images.map((image, key) => (
              <div key={key}>
                <img src={image} alt={`Slide ${key + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Projects;
