import React from "react";
import Navbar from "../../Navbar/Navbar";
import Ebook from '../../../assets/E-Book.png';
import toyotaclone from '../../../assets/toyota clone.jpeg';
import Allensonly_clone from '../../../assets/Allensonly_clone.png'
import netflix from '../../../assets/netflix.png'
import { useTheme } from '../../../Context/ThemeContext';

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const projects = [
    {
      id: 1,
      title: "E-book E-Commerce Website",
      description: "A full-stack MERN application for buying and selling products.",
      liveLink: "https://ebooks.noorulameen.tech/",
      sourceCode: "https://github.com/mohammednoorulameen/E-book_e_commerce",
      smallImage: `${Ebook}`, 
    },
    {
      id: 2,
      title: "UI design a Website",
      description: "UI-UX design ",
      liveLink: "https://mohammednoorulameen.github.io/tayota-responsive/",
      sourceCode: "https://github.com/mohammednoorulameen/tayota",
      smallImage: `${toyotaclone}`, // Add small image URL
    },
    {
      id: 3,
      title: "UI design a Website",
      description: "UI-UX design ",
      liveLink: "https://mohammednoorulameen.github.io/Allensolly/",
      sourceCode: "https://github.com/mohammednoorulameen/Allensolly",
      smallImage: `${Allensonly_clone}`, // Add small image URL
    },
     {
      id: 4,
      title: "netflix clone",
      description: "React netflix clone  ",
      liveLink: "https://netflix-clone-pcermdq85-mohammednoorulameens-projects.vercel.app/",
      sourceCode: "https://github.com/mohammednoorulameen/netflix-clone",
      smallImage: `${netflix}`, // Add small image URL
    },
  ];

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} p-8 min-h-screen`}>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`border rounded-lg shadow-lg p-6 ${isDarkMode ? 'bg-black hover:bg-white hover:text-black' : 'bg-white'} hover:shadow-2xl transition duration-300`}
          >
            <div className="flex justify-between items-center mb-4">
              {/* Project Title */}
              <h2 className="text-xl font-semibold flex-grow">{project.title}</h2>
              {/* Small Image */}
              <img
                src={project.smallImage}
                alt={`${project.title} Small Image`}
                className="w-12 h-12 object-cover rounded-full flex-shrink-0"  
              />
            </div>
            <p className="mb-4">{project.description}</p>
            <div className="flex justify-between">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Live Demo
                </a>
              )}
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



