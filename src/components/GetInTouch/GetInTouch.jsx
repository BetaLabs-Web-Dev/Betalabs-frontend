import "./GetInTouch.css";

const GetInTouch = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div id="contact">
      <div className="flex flex-col items-center text-[#01DEDE] font-poppins p-10 mb-10">
        <div className="py-10">
          <h1 className="text-[48px] text-[#01DEDE] font-semibold">GET IN TOUCH</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-10 md:gap-[60px] font-medium text-[18px] md:text-[20px]">
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
                className="w-[80vw] md:w-[700px] placeholder:text-[#01dede] placeholder:text-[16px]"
                id="message"
                placeholder="Write your message..."
                rows={3}
              />
            </div>
            <div className="flex flex-row justify-between font-inter font-bold text-[18px] md:text-[22px]">
              <button type="reset" className="git-clear rounded-lg px-8 py-1">Clear</button>
              <button type="submit" className="git-submit rounded-lg px-8 py-1">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
