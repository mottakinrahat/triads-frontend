import { useEffect, useState } from "react";
import "./App.css";
import Continue from "./component/ContinuePage/Continue";
import Banner from "./component/LandingPage/Banner/Banner";

function App() {
  const [continueActive, setContinueActive] = useState(true);
  const [mainContentVisible, setMainContentVisibale] = useState(false);

  useEffect(() => {
    if (!continueActive) {
      const timer = setTimeout(() => {
        setMainContentVisibale(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [continueActive]);
  return (
    <>
      <div
        onClick={() => setContinueActive(false)}
        className={`cursor-pointer ${!continueActive ? "hidden" : "block"}`}
      >
        <Continue />
      </div>
      <div
        className={` h-screen relative flex justify-center items-center bg-black   w-full ${mainContentVisible ? "hidden" : "block"}`}
      >
        <img className="h-full" src="/images/loading.gif" alt="loading gif" />
        <div className="absolute size-full bg-[#68080f] bg-opacity-60 "></div>
      </div>
      <div
        className={`relative h-auto overflow-hidden ${mainContentVisible ? "block" : "hidden"} `}
      >
        <div className="absolute inset-0 bg-[#4B0200] bg-opacity-60 z-10"></div>
        <div className="hero-background"></div>
        <Banner />
        <video autoPlay muted loop className="background-video">
          <source src="/hero-section-video.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default App;
