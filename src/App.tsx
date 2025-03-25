import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import { useTheme } from "./Context/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } transition-all duration-300`}
      >
        <HomePage />
      </div>
    </>
  );
}

export default App;
