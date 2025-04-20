import React from "react";
import { useTheme } from "../../Context/ThemeContext";
// import VoiceAssistant from "../VoiceAssistant/VoiceAssistant";

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      {/* Toggle Switch Section */}
      <div className="flex items-center justify-end pr-8 sm:pr-6 md:pr-10 lg:pr-20 xl:pr-90 pt-10 p-5">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="sr-only peer"
          />
          {/* Background of toggle switch */}
          <div
            className={`w-11 h-6 rounded-full transition duration-300 ${
              isDarkMode ? "bg-white" : "bg-black"
            }`}
          ></div>
          {/* Circle inside toggle */}
          <div
            className={`absolute w-4 h-4 ${
              isDarkMode ? "bg-black" : "bg-white"
            } rounded-full left-1 top-1 transition-transform duration-300 peer-checked:translate-x-5`}
          ></div>
        </label>
        {/* <VoiceAssistant /> */}
      </div>

      {/* Center content section */}
      <div className="mt-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-serif">
          Mohammed Noorul Ameen
        </h1>
        <p className="text-sm md:text-lg font-serif mt-3 md:mt-7">
          Software Engineer, Technology & Business Enthusiast
        </p>
      </div>
    </div>
  );
};

export default Navbar;



