import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useTitle from "./hooks/useTitle"
//components
import HomePage from "./components/HomePage";
import Navbar from "./components/Header/Navbar";
import Works from "./components/Works/Works";

//images
import todo from "./asset/todo.jpg";
import store from "./asset/store.jpg";
import exchange from "./asset/exchange.jpg";
import messenger from "./asset/messenger.jpg";
import DeatailWorks from "./components/Works/DeatailWorks";

export const data = [
  {
    id: 1,
    image: store,
    name: "Msud Store",
    href: "https://msud-store.netlify.app/",
    technology: ["react", "tailwind", "axios", "SPA", "PWA"],
    capabilities: [
      "Shoping Cart",
      "Search Products",
      "Validation Form",
      "Favorite Product",
      "Dark theme",
    ],
  },
  {
    id: 2,
    image: exchange,
    name: "Msud Exchange",
    href: "https://msud-exchange.netlify.app/",
    technology: ["react", "tailwind", "axios", "SPA"],
    capabilities: ["Search Coins", "Detail Coin", "Charts", "Dark theme"],
  },
  {
    id: 3,
    image: todo,
    name: "Todo App",
    href: "https://msud-todo.netlify.app/",
    technology: ["react", "SASS", "axios"],
    capabilities: ["counting actions", "add actions"],
  },
  {
    id: 4,
    image: messenger,
    name: "Msudgram(messenger)",
    href: "https://msudgram-messenger.netlify.app",
    technology: ["react", "FireBase", "ChatEngine", "axios"],
    capabilities: ["authentication", "Privet Chat", "group chat"],
  },
];

function App() {
  useTitle("Portfolio")
  const [showTopButton, setShowTopButton] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);
  const [direction, setDirection] = useState("ltr");
  console.log(direction);

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
    <div className="scroll-smooth transition-all ease-out font-vazir dark:bg-gray-800">
      <Navbar navbarShow={navbarShow} direction={setDirection} />
      <Routes>
        <Route
          path="/*"
          element={<HomePage data={data} navbarShow={navbarShow} />}
        />
        <Route path="/Project" element={<Works />} />
        <Route path="/Project/:id" element={<DeatailWorks />} />
      </Routes>
      {showTopButton && (
        <button
          onClick={goToTop}
          className="fixed bottom-4 right-4 bg-green-300 text-3xl backdrop-blur-lg bg-opacity-20 py-4 px-3 rounded-full z-40"
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
