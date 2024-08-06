import { useEffect, useRef, useState } from "react";
import ReuseMarquee from "../../ReusableMarquee/ReuseMarquee";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import { AiFillMuted } from "react-icons/ai";
import { IoVolumeHighSharp } from "react-icons/io5";
import VerticalMarquee from "../../ReusableMarquee/VerticalMarquee";

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
        className="bg-[#4B0200] absolute top-0 left-0 flex bg-shadow shadow-3xl text-8xl font-bold text-[#CC1414] w-full min-h-[130px]  items-center z-[400]"
      >
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
      </ReuseMarquee>
      <ReuseMarquee
        gradient={true}
        speed={120}
        className="bg-[#4B0200] flex absolute bottom-0 left-0 bg-shadow shadow-3xl text-8xl font-bold text-[#CC1414] w-full h-[140px]  items-center z-[400]"
        direction="right"
      >
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
      </ReuseMarquee>

      <div className="relative h-full px-10  z-[300] grid grid-cols-12 ">
        <div className="h-full col-span-2">
          <VerticalMarquee />
        </div>

        {/* Main content */}
        <div className="pb-32 pt-60 col-span-8 h-full container z-[200]">
          <div className="relative">
            <div className="flex flex-col z-[300] relative justify-center items-center">
              <img
                className="max-w-[600px]"
                src="/images/upBarWithText.png"
                alt=""
              />
              <div className="mt-8 mb-5 space-y-3">
                <ul className="items-center flex flex-wrap gap-8 justify-center">
                  <li className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-primary-color hover:text-white text-4xl font-bold flex items-center gap-2 uppercase"
                    >
                      <FaTelegram />{" "}
                      <span className="text-shadow">Telegram</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <a
                      href="#"
                      className="text-primary-color hover:text-white text-4xl font-bold flex items-center gap-2 uppercase"
                    >
                      <FaTwitter /> <span className="text-shadow">Twitter</span>
                    </a>
                  </li>
                </ul>

                <ul className="flex w-full justify-center items-center gap-8">
                  <li>
                    <a
                      href="#"
                      className="text-primary-color hover:text-white text-4xl font-bold text-shadow flex items-center gap-2 uppercase"
                    >
                      Solscan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-color hover:text-white text-4xl font-bold text-shadow flex items-center gap-2 uppercase"
                    >
                      Buy Now
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-color hover:text-white text-4xl font-bold text-shadow flex items-center gap-2 uppercase"
                    >
                      Chart
                    </a>
                  </li>
                  <li>
                    <div className="text-primary-color text-4xl font-bold flex items-center gap-2">
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
                className="max-w-[900px] animate-fadeEffect"
                src="/images/striaosLogo.png"
                alt=""
              />
              <p className="text-center mt-7 mb-10 text-shadow-lg text-2xl text-[#CC1414] font-bold leading-none">
                Follow the thin red line.
                <br />
                The places it leads to will take you to the riches
              </p>
              <div className="relative max-w-5xl mx-auto">
                <img
                  className="w-full h-auto object-contain"
                  src="/images/bottomButton.png"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <p className="text-2xl font-bold text-center break-words font-serif">
                    D8sU6N62WpYS6Aby11kg4BLuJrdyWtUEhuFWf97R7Tw2
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="py-1 px-8 active:bg-black active:border-black active:text-white border rounded-2xl text-lg font-bold border-[#880b16] bg-[#880b16]">
                  Copy
                </button>
              </div>
            </div>

            <div className="absolute top-[40%] -translate-x-1/2 -translate-y-1/2 z-[100] left-1/2">
              <img
                className="animate-scaleUpDown"
                src="/images/_symbol-f3ddca6a.png"
                alt="symbol image"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-12">
            <a
              className="block p-5 hover:border-white transition-colors duration-300 hover:text-white bg-[#490004] text-[#d6010f] uppercase rounded-sm text-4xl font-bold border-[#d6010f] border-l-[1rem] border-r-[1rem] border-t-[0.15rem] border-b-[0.15rem]"
              href="#"
              target="_blank"
            >
              Follow The rio line
            </a>
          </div>
        </div>
        {/* Vertical Scroll bar right */}
        <div className="h-full col-span-2">
          <VerticalMarquee />
        </div>
      </div>
    </div>
  );
};

export default Banner;
