import "./Hero.css";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <div
      style={{
        backgroundImage: `url(./images/background.png)`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative isolate px-[6vw] py-[25vh]">
        <div className="font-poppins w-[80vw] md:w-[62vw]">
          <div className="flex flex-col items-start text-left gap-8">
            <div className="font-medium">
              <h1 className="hero-title text-[7vw] md:text-[5vw] leading-snug">
                WELCOME TO THE
              </h1>
              <h1 className="hero-title text-[7vw] md:text-[5vw] leading-snug mx-[10vw]">
                TECHNICAL CLUB
              </h1>
              <h1 className="hero-title text-[7vw] md:text-[5vw] leading-snug">
                OF IIIT KOTTAYAM
              </h1>
            </div>
            <p className="text-[14px] md:text-[1.4vw] text-white">
              “Lorem ipsum dolor sit amet consectetur. Malesuada phasellus
              auctor diam senectus viverra arcu arcu volutpat. Posuere amet a
              enim aliquam vulputate non.”
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="font-inter rounded-md bg-[#1205A4] px-3 md:px-5 py-2 md:py-2.5 text-[16px] md:text-[18px] font-medium text-white hover:bg-[#1205a4a5]"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
