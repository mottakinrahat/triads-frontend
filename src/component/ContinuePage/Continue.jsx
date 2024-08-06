import "./continue.css";
const Continue = ({setShowContinue, setShowVideo}) => {
  return (
    <div onClick={() => {setShowContinue(false); setShowVideo(true)}} className="max-w-[100vw] w-full h-screen overflow-x-hidden relative">
      <div
        style={{
          backgroundImage: `url('https://triads.io/assets/_ticker-800fbd73.png')`,
        }}
        className="h-full w-full bg-red-950 bg-cover"
      >
        
      </div>
      <div className="w-full h-full absolute bg-red-950 bg-opacity-50 z-10 top-0">
        <div className="absolute w-full h-full bg-red-700 opacity-30 pointer-events-none z-20"></div>
        <div className="max-w-[80vw] md:max-w-[60vw] lg:max-w-[60vw]  mx-auto w-full h-full flex items-center flex-col justify-center relative">
          <img
            id="continue-straios"
            src="https://triads.io/assets/_ticker-800fbd73.png"
            alt="image"
          />
          <h3 className={`text-3xl md:text-4xl lg:text-5xl mt-5 text-center text-[#D00C0B] font-outline-2 `}>
            Click some where to <br />
            continue.....
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Continue;
