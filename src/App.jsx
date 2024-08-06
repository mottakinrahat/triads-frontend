// import { useState } from "react";
import "./App.css";
import Banner from "./component/LandingPage/Banner/Banner";
import Cursor from "./component/Cursor/Cursor";
import Continue from "./component/ContinuePage/Continue";
import ChapterSection from "./component/LandingPage/ChapterSection/ChapterSection";
import GallerySection from "./component/LandingPage/GallerySection/GallerySection";
import Section4 from "./component/LandingPage/Section4/Section4";
import Section5 from "./component/LandingPage/Section5/Section5";
import { useEffect, useState } from "react";
import IntroVideo from "./component/LandingPage/IntroVideo/IntroVideo";

function App() {
  const [shwoVideo, setShowVideo] = useState(false);
  const [shwoContinue, setShowContinue] = useState(true);
  useEffect(() => {
    const body = document.body;
    console.log(body);
    shwoContinue? body.style.overflow = "hidden": body.style.overflowY = "visible"
  },[shwoContinue])
  // const [count, setCount] = useState(0);
  // // Inline styles for the background image
  // const backgroundImageStyle = {
  //   backgroundImage: "url('/images/bg-images.jpg')",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundAttachment: "fixed",
  // };
  
  return (
    <div className="relative">
      <Cursor />
      {shwoContinue && (
        <div className="sticky top-0 left-0">
          <Continue
            setShowContinue={setShowContinue}
            setShowVideo={setShowVideo}
          />
        </div>
      )}
      {shwoVideo && (
        <IntroVideo setShowVideo={setShowVideo}/>
      )}
      <Banner />
      <ChapterSection />
      <GallerySection />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;
