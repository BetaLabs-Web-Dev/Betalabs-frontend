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
    <div id="projects">
      <div className="Slider m-[20px]">
        <h1 className="text-[48px] text-[#01DEDE] font-semibold m-8">Projects</h1>
        <div>
          <Carousel showStatus={false} showIndicators={false}>
            {images.map((image, key) => (
              <div key={key} className="">
                <img src={`images/${image}`} alt={`Slide ${key + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
