import "./App.css";
import Cursor from "./component/Cursor/Cursor";
import Banner from "./component/LandingPage/Banner/Banner";
import ChapterSection from "./component/LandingPage/ChapterSection/ChapterSection";
import GallerySection from "./component/LandingPage/GallerySection/GallerySection";
import Section4 from "./component/LandingPage/Section4/Section4";
import Section5 from "./component/LandingPage/Section5/Section5";

function App() {
  return (
    <div>
      <Cursor/>
      <div className="relative h-auto overflow-hidden ">
        <div className="absolute inset-0 bg-[#4B0200] bg-opacity-60 z-10"></div>
        <div className="hero-background"></div>
        <Banner />
        <video autoPlay muted loop className="background-video">
          <source src="/hero-section-video.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <ChapterSection/>
      </div>
      <GallerySection/>
      <Section4/>
      <Section5/>
    </div>
  );
}

export default App;
