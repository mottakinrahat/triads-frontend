// import { useState } from "react";
import "./App.css";
import Banner from "./component/LandingPage/Banner/Banner";
import Cursor from "./component/Cursor/Cursor";
import Continue from "./component/ContinuePage/Continue";
import ChapterSection from "./component/LandingPage/ChapterSection/ChapterSection";
import GallerySection from "./component/LandingPage/GallerySection/GallerySection";
import Section4 from "./component/LandingPage/Section4/Section4";
import Section5 from "./component/LandingPage/Section5/Section5";

function App() {
  // const [count, setCount] = useState(0);
  // // Inline styles for the background image
  // const backgroundImageStyle = {
  //   backgroundImage: "url('/images/bg-images.jpg')",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundAttachment: "fixed",
  // };
  return (
    <div>
      <Cursor />
      <Continue />
      <Banner />
      <ChapterSection />
      <GallerySection/>
      <Section4/>
      <Section5/>
    </div>
  );
}

export default App;
