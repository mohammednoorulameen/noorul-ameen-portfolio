import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";

const Highlights: React.FC = () => {
  const { isDarkMode } = useTheme();


  const HandleCVDownload = () =>{
    try {
      console.log("hellp")
        const cvUrl = "/NoorulAmeen-CV.pdf";
        const link = document.createElement("a");
        link.href = cvUrl;
        link.download = "NoorulAmeen-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      
    } catch (error) {
      console.log("not working")
    }
  }

  return (
    <div>
      <div>
        <h1 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mt-5 sm:mt-10 pl-5 md:pl-10 lg:pl-50">
        Highlights
        </h1>
        <hr className="w-3/4 h-0.5 bg-gray-900 ml-5 md:ml-10 lg:ml-50 mt-2" />

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-8 pl-5 md:pl-10 lg:pl-55">
          {[
            { name: "Download CV", onClick : HandleCVDownload},
            { name: "Visit Projects", url: "/projects" },
            { name: "Visit Skills", url: "/skills" },
          ].map(({ name, url, onClick }) => (
            <Link
              key={name}
              to={url || "#"}
              onClick={onClick || undefined}
              // target={url ? "_blank" : undefined}
              rel={url ? "noopener noreferrer" : undefined}
              className={`border-2 px-4 py-2 rounded font-serif font-black transition duration-300 ${
                isDarkMode
                  ? "border-white bg-black text-white hover:bg-white hover:text-black"
                  : "border-black bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
