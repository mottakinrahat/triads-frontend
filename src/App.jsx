import { useState } from "react";
import "./App.css";
import Banner from "./component/LandingPage/Banner/Banner";

function App() {
  return (
    <div className="relative ">
      <div className="hero-background"></div>
      <Banner />
      <video autoPlay muted loop className="background-video">
        <source src="/hero-section-video.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
