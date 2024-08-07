import { useEffect, useState } from "react";
import "./App.css";
import Continue from "./component/ContinuePage/Continue";
import Banner from "./component/LandingPage/Banner/Banner";
import ChapterSection from "./component/LandingPage/ChapterSection/ChapterSection";
import GallerySection from "./component/LandingPage/GallerySection/GallerySection";
import Section4 from "./component/LandingPage/Section4/Section4";
import Section5 from "./component/LandingPage/Section5/Section5";
import Footer from "./component/LandingPage/footer/Footer";

function App() {
  const [continueActive, setContinueActive] = useState(true);
  const [mainContentVisible, setMainContentVisibale] = useState(false);

  useEffect(() => {
    if (!continueActive) {
      const timer = setTimeout(() => {
        setMainContentVisibale(true);
      }, 1900);

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
      <div className={`${mainContentVisible ? "block" : "hidden"} h-auto`}>
        <div className={`relative h-auto overflow-hidden  `}>
          <div className="absolute inset-0 bg-[#4B0200] bg-opacity-60 z-10"></div>
          <div className="hero-background"></div>
          <Banner />
          <video autoPlay muted loop className="background-video">
            <source src="/hero-section-video.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <ChapterSection />
        <GallerySection />
        <Section4 />
        <div className="bg-[url('/public/images/bg-images.jpg')] overflow-hidden relative">
          <div className="bg-red-700 bg-opacity-70 absolute size-full top-0 left-0 z-10"></div>
          <Section5 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
