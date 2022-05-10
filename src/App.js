import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//components
import HomePage from "./components/HomePage";
import Navbar from "./components/Header/Navbar";
import Works from "./components/Works/Works";

//images
import todo from "./asset/2022-04-20 (6).jpg";
import store from "./asset/2022-04-20 (4).jpg";
import exchange from "./asset/2022-04-20 (2).jpg";
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
  const [showTopButton, setShowTopButton] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);
  const [direction , setDirection] = useState("ltr")
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
          className="fixed bottom-4 right-4 bg-green-300 text-3xl backdrop-blur-lg bg-opacity-20 py-5 px-4 rounded-full z-40"
        >
          <p className="animate-bounce">top</p>
        </button>
      )}
    </div>
  );
}

export default App;
