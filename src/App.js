import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#faf7f2",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route
          path="/"
          element={<Hero darkMode={darkMode} />}
        />

        <Route
          path="/about"
          element={<About darkMode={darkMode} />}
        />

        <Route
          path="/projects"
          element={<Projects darkMode={darkMode} />}
        />

        <Route
          path="/skills"
          element={<Skills darkMode={darkMode} />}
        />

        <Route
          path="/certifications"
          element={<Certifications darkMode={darkMode} />}
        />

        <Route
          path="/blog"
          element={<Blog darkMode={darkMode} />}
        />

        <Route
          path="/contact"
          element={<Contact darkMode={darkMode} />}
        />
      </Routes>

      <Footer darkMode={darkMode} />
      <ScrollTop darkMode={darkMode} />
    </div>
  );
}