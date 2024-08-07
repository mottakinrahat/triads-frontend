import VerticalMarquee from "../ReusableMarquee/VerticalMarquee";
import "./continue.css";
const Continue = ({ setShowContinue, setShowVideo }) => {
  return (
    <div
      onClick={() => {
        setShowContinue(false);
        setShowVideo(true);
      }}
      className=" z-[3000] w-full h-screen overflow-x-hidden fixed top-0 left-0"
    >
      <div
        style={{
          backgroundImage: `url('/images/bg-images.jpg')`,
        }}
        className="h-full w-full  bg-cover z-10 absolute top-0 left-0 size-full "
      ></div>
      <div className="absolute inset-0 bg-[#68080f] bg-opacity-90  z-20"></div>
      <div className="absolute inset-0 bg-[#68080f] bg-opacity-60 z-30"></div>
      <div className="absolute top-0 left-0 size-full grid grid-cols-12 gap-3 lg:gap-20 z-20">
        <div className="h-full col-span-3">
          <VerticalMarquee margqueNumber={100} />
        </div>
        <div className="h-full col-span-6 grid grid-cols-2 gap-3 lg:gap-6 ">
          <div className="h-full">
            <VerticalMarquee margqueNumber={100} />
          </div>
          <div className="h-full">
            <VerticalMarquee margqueNumber={100} />{" "}
          </div>
        </div>
        <div className="h-full col-span-3">
          <VerticalMarquee margqueNumber={100} />
        </div>
      </div>
      <div className="w-full h-full z-40 relative">
        <div className="max-w-[80vw] md:max-w-[60vw] lg:max-w-[60vw]  mx-auto w-full h-full flex items-center flex-col justify-center relative">
          <img
            id="continue-straios"
            src="https://triads.io/assets/_ticker-800fbd73.png"
            alt="image"
          />
          <h3
            className={`text-3xl md:text-4xl lg:text-5xl mt-5 text-center text-[#D00C0B] font-outline-2 `}
          >
            Click some where to <br />
            continue.....
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Continue;
