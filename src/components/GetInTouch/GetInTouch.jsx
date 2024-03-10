import { Fragment } from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center text-[#01DEDE] font-poppins p-10 mb-10">
        <div className="p-10">
          <h1 className="text-[3vw] text-[#01DEDE] font-semibold">GET IN TOUCH</h1>
        </div>
        <form action="#">
          <div className="flex flex-col gap-[60px] font-medium text-[20px]">
            <div className="flex flex-col">
              <label htmlFor="fullname">Full Name</label>
              <input className="w-[300px]" type="text" id="fullname" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input className="w-[300px]" type="email" id="email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                className="w-[700px] placeholder:text-[#01dede] placeholder:text-[16px]"
                id="message"
                placeholder="Write your message..."
                rows={3}
              />
            </div>
            <div className="flex flex-row justify-between font-inter font-bold text-[22px]">
              <button className="git-clear rounded-lg px-8 py-1">Clear</button>
              <button className="git-submit rounded-lg px-8 py-1">Send</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default GetInTouch;
