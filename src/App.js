import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useTitle from "./hooks/useTitle";
//components
import HomePage from "./components/HomePage";
import Navbar from "./components/Header/Navbar";
import Works from "./components/Works/Works";
import AboutMe from "./components/AboutMe/AboutMe";
import DetailWorks from "./components/Works/DeatailWorks";
//project details 
import { data } from "./projectData";

function App() {
  useTitle("Portfolio");
  const [showTopButton, setShowTopButton] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);
  const [direction, setDirection] = useState("ltr");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setNavbarShow(true);
      } else {
        setNavbarShow(false);
      }
      if (window.scrollY > 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-smooth font-vazir transition-all ease-out dark:bg-gray-800">
      <Navbar navbarShow={navbarShow} direction={setDirection} />
      <Routes>
        <Route
          path="/*"
          element={<HomePage data={data} navbarShow={navbarShow} />}
        />
        <Route path="/Project" element={<Works />} />
        <Route path="/Project/:id" element={<DetailWorks />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
      {showTopButton && (
        <button
          onClick={goToTop}
          className="fixed bottom-4 right-4 z-40 rounded-full bg-green-300 bg-opacity-20 py-4 px-3 text-3xl backdrop-blur-lg"
        >
          <p className="animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </p>
        </button>
      )}
    </div>
  );
}

export default App;
