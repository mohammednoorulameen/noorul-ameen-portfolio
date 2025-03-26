import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./Context/ThemeContext";
import Projects from "./Componets/Highlights/Projects/Projects";
import Skills from "./Componets/Highlights/Skills/Skills";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div
        className={`${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } transition-all duration-300`}
      >
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
