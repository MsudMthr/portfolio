import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//components
import HomePage from "./components/HomePage";
import Navbar from "./components/Header/Navbar";

//images
import todo from "./asset/2022-04-20 (6).jpg";
import store from "./asset/2022-04-20 (4).jpg";
import exchange from "./asset/2022-04-20 (2).jpg";
import messenger from "./asset/messenger.jpg";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
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

  const data = [
    {
      id: 1,
      image: store,
      name: "Msud Store",
      href: "https://msud-store.netlify.app/",
    },
    {
      id: 2,
      image: exchange,
      name: "Msud Exchange",
      href: "https://msud-exchange.netlify.app/",
    },
    {
      id: 3,
      image: todo,
      name: "Todo App",
      href: "https://msud-todo.netlify.app/",
    },
    {
      id: 4,
      image: messenger,
      name: "Msudgram(messenger)",
      href: "https://msudgram-messenger.netlify.app",
    },
  ];

  return (
    <div className="scroll-smooth transition-all ease-out dark:bg-gray-800">
      <Navbar navbarBackground={navbarBackground} />

      <Routes>
        <Route path="/*" element={<HomePage data={data} />} />
        <Route path="/games" element={<h1></h1>} />
      </Routes>
      {showTopButton && (
        <button
          onClick={goToTop}
          className="fixed bottom-4 right-4 bg-green-300 text-3xl backdrop-blur-lg bg-opacity-20 py-5 px-4 rounded-full z-40"
        >
          <p className="animate-bounce">top</p>
        </button>
      )}
    </div>
  );
}

export default App;
