import { useEffect, useRef, useState } from "react";
import ReuseMarquee from "../../ReusableMarquee/ReuseMarquee";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { AiFillMuted } from "react-icons/ai";
import { IoVolumeHighSharp } from "react-icons/io5";
import VerticalMarquee from "../../ReusableMarquee/VerticalMarquee";
import Navigation from "./Navigation/Navigation";

const Banner = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    // Function to play audio
    const playAudio = () => {
      if (audio) {
        audio.muted = isMuted; // Set initial mute state based on isMuted
        audio.loop = true; // Loop the audio for continuous playback
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    };

    // Play audio on first user interaction
    const handleUserInteraction = () => {
      playAudio();
      // Remove event listeners after the first interaction
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };

    // Add event listeners to detect user interaction
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isMuted]);

  const handleMuteUnmute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Transparent overlay */}

      <ReuseMarquee
        gradient={true}
        speed={120}
        className="bg-[#4B0200] absolute top-0 left-0 flex bg-shadow shadow-3xl text-4xl xl:text-8xl font-bold text-[#CC1414] w-full py-4 xl:py-0 xl:min-h-[130px]  items-center z-[400]"
      >
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
      </ReuseMarquee>
      <ReuseMarquee
        gradient={true}
        speed={120}
        className="bg-[#4B0200] flex absolute bottom-0 left-0 bg-shadow shadow-3xl text-4xl xl:text-8xl font-bold text-[#CC1414] w-full py-4 xl:py-0 xl:min-h-[140px]  items-center z-[400]"
        direction="right"
      >
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
      </ReuseMarquee>

      <div className="relative h-full md:px-10  z-[300] lg:grid flex flex-col  grid-cols-12 ">
        <div className="h-full hidden xl:block xl:col-span-2 relative">
          <img
            src="/images/dragon.png"
            className="absolute animate-dargon-fade opacity-85 top-1/2 left-1/2 -translate-x-1/2 z-[400] -translate-y-1/2"
            alt="dragon image"
          />
          <VerticalMarquee />
        </div>

        <Navigation />

        {/* Main content */}
        <div className="lg:pb-32 pt-44 col-span-10 xl:col-span-8 h-full container z-[200]">
          <div className="relative">
            <div className="flex flex-col z-[300] relative justify-center items-center">
              <img
                className="lg:max-w-[60%] w-full"
                src="/images/upBarWithText.png"
                alt=""
              />

              <div className="mt-8 mb-5 space-y-3">
                <ul className="items-center flex flex-wrap gap-8 justify-center">
                  <li className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-primary-color hover:text-white  font-bold flex items-center gap-2 uppercase"
                    >
                      <FaTelegram />{" "}
                      <span className="text-shadow">Telegram</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-primary-color hover:text-white  font-bold flex items-center gap-2 uppercase"
                    >
                      <FaTwitter /> <span className="text-shadow">Twitter</span>
                    </a>
                  </li>
                </ul>

                <ul className="hidden md:flex w-full flex-wrap justify-center text-xl gap-6 sm:text-2xl lg:text-4xl items-center sm:gap-8">
                  <li>
                    <a
                      href="#"
                      className="text-primary-color hover:text-white  font-bold text-shadow flex items-center gap-2 uppercase"
                    >
                      Solscan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-color hover:text-white  font-bold text-shadow flex items-center gap-2 uppercase"
                    >
                      Buy Now
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-color hover:text-white  font-bold text-shadow flex items-center gap-2 uppercase"
                    >
                      Chart
                    </a>
                  </li>
                  <li>
                    <div className="text-primary-color  font-bold flex items-center gap-2">
                      <audio
                        ref={audioRef}
                        src="/music.m4a"
                        className="hidden"
                      />
                      <button onClick={handleMuteUnmute}>
                        {isMuted ? <AiFillMuted /> : <IoVolumeHighSharp />}
                      </button>
                    </div>
                  </li>
                </ul>
              </div>

              <img
                className=" animate-fadeEffect w-full h-full"
                src="/images/striaosLogo.png"
                alt=""
              />
              <p className="text-center mt-7 mb-10 text-shadow-lg text-xl sm:text-2xl text-[#CC1414] font-bold leading-none">
                Follow the thin red line.
                <br />
                The places it leads to will take you to the riches
              </p>
              <div
                className="copy-text-filed md:block hidden relative max-w-[80%]  mx-auto"
                style={{ backgroundImage: `url("/images/bottomButton.png")` }}
              >
                <p className="text-lg font-bold text-center  break-all font-serif">
                  D8sU6N62WpYS6Aby11kg4BLuJrdyWtUEhuFWf97R7Tw2
                </p>
              </div>
              <div className="p-5 md:hidden block bg-primary-color rounded-full mb-5 mt-6">
                <p className="sm:text-base text-sm font-bold text-center  break-all font-serif">
                  D8sU6N62WpYS6Aby11kg4BLuJrdyWtUEhuFWf97R7Tw2
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button className="py-1 px-8 active:bg-black active:border-black active:text-white border rounded-2xl text-lg font-bold border-[#880b16] bg-[#880b16]">
                  Copy
                </button>
              </div>
            </div>

            <div className="absolute top-[40%] -translate-x-1/2 w-[350px] sm:w-[600px] 2xl:w-[700px] -translate-y-1/2 z-[100] left-1/2">
              <img
                className="animate-scaleUpDown "
                src="/images/_symbol-f3ddca6a.png"
                alt="symbol image"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 mb-5 lg:my-12">
            <a
              className="block p-5 hover:border-white transition-colors duration-300 hover:text-white bg-[#490004] text-[#d6010f] uppercase rounded-sm text-base sm:text-lg md:text-4xl font-bold border-[#d6010f] border-l-[1rem] border-r-[1rem] border-t-[0.15rem] border-b-[0.15rem]"
              href="#"
              target="_blank"
            >
              Follow The rio line
            </a>
          </div>
        </div>
        {/* Vertical Scroll bar right */}
        <div className="lg:block hidden col-span-2 relative">
          <img
            src="/images/dragon.png"
            className="absolute animate-dargon-fade opacity-85 top-1/2 left-1/2 -translate-x-1/2 z-[400] -translate-y-1/2"
            alt="dragon image"
          />
          <VerticalMarquee />
        </div>

        <div className="h-[500px] relative px-5 md:hidden">
          <VerticalMarquee margqueNumber={100} />
          <img src="/images" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
