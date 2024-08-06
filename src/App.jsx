import { useState } from "react";
import "./App.css";
import Banner from "./component/LandingPage/Banner/Banner";
import Cursor from "./component/Cursor/Cursor";
import Continue from "./component/ContinuePage/Continue";
import ChapterSection from "./component/LandingPage/ChapterSection/ChapterSection";

function App() {
  const [count, setCount] = useState(0);
  // Inline styles for the background image
  const backgroundImageStyle = {
    backgroundImage: "url('/images/bg-images.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <div>
      <Cursor />
      <Continue />
      <Banner />
      <ChapterSection />
    </div>
  );
}

export default App;
