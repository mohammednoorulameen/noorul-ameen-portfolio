import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGit,
  FaDocker,
  FaCloud,
  FaDatabase,
  FaLock,
  FaCss3,
  FaPalette,
  FaRocket,
  FaPaperPlane,
} from "react-icons/fa"; 
import Navbar from "../../Navbar/Navbar";
import { useTheme } from "../../../Context/ThemeContext";

const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();
  const skills = [
    {
      category: "Skills",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "Redux Toolkit", icon: <FaReact /> },
        { name: "RTK Query", icon: <FaReact /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Cloudinary", icon: <FaCloud /> },
        { name: "Git", icon: <FaGit /> },
        { name: "OAuth", icon: <FaLock /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Postman", icon: <FaPaperPlane /> },
        { name: "Tailwind CSS", icon: <FaCss3 /> },
        { name: "Material-UI", icon: <FaPalette /> },
        { name: "Vite", icon: <FaRocket /> },
      ],
    },
  ];

  return (
    <div
      className={`p-8 min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>
      <div className="space-y-12">
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">
              {skillCategory.category}
            </h2>
            <div className="flex flex-wrap gap-6">
              {skillCategory.items.map((skill, idx) => (
                <div
                  key={idx}
                  className={`py-2 px-6 rounded-full text-center border transition duration-300 ${isDarkMode ? 'bg-black text-white border-white hover:bg-white hover:text-black' : 'bg-white text-black border-black hover:bg-black hover:text-white'}`}
                >
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

