import "./App.css";
import Banner from "./component/LandingPage/Banner/Banner";

function App() {
  return (
    <div className="relative h-auto overflow-hidden ">
      <div className="absolute inset-0 bg-[#4B0200] bg-opacity-60 z-10"></div>
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
