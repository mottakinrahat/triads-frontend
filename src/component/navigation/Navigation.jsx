import { useState } from "react";
import { FaTelegram, FaTwitter, FaVolumeOff } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(true);
  return (
    <div className="w-[80%] sm:w-[70%] absolute top-36 left-[50%] -translate-x-[50%] z-[500]">
      <div className="lg:hidden w-full border-2 border-[#d70202] p-3 sm:p-5 px-4 sm:px-8 rounded-full bg-[#680000] flex items-center justify-between">
        <div>
          <HiOutlineMenu
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-[#d70202] text-3xl cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-5">
          <div onClick={() => setIsAudioOn(!isAudioOn)}>
            {isAudioOn ? (
              <FaVolumeHigh className="text-[#d70202] text-3xl cursor-pointer" />
            ) : (
              <FaVolumeOff className="text-[#d70202] text-3xl cursor-pointer" />
            )}
          </div>
          <FaTelegram className="text-[#d70202] text-3xl cursor-pointer" />
          <FaTwitter className="text-[#d70202] text-3xl cursor-pointer" />
        </div>
      </div>
      <div
        className={`bg-black bg-opacity-60 w-[90%] mx-auto rounded-xl mt-5 overflow-hidden duration-300 ease-linear ${
          dropdownOpen ? "h-full p-8 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="items-center flex flex-col flex-wrap gap-5 justify-center">
          <li className="flex items-center gap-2">
            <a
              href="#"
              className="text-primary-color hover:text-white text-2xl font-bold text-shadow flex items-center gap-2 uppercase"
            >
              <FaTelegram /> <span className="text-shadow">Telegram</span>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="#"
              className="text-primary-color hover:text-white text-2xl font-bold text-shadow flex items-center gap-2 uppercase"
            >
              <FaTwitter /> <span className="text-shadow">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-primary-color hover:text-white text-2xl font-bold text-shadow flex items-center gap-2 uppercase"
            >
              Solscan
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-primary-color hover:text-white text-2xl font-bold text-shadow flex items-center gap-2 uppercase"
            >
              Buy Now
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-primary-color hover:text-white text-2xl font-bold text-shadow flex items-center gap-2 uppercase"
            >
              Chart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
