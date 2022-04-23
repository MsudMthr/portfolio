import React from "react";

import Header from "./components/Header/Header";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Player from "./components/music/Player";

import todo from "./asset/2022-04-20 (6).jpg";
import store from "./asset/2022-04-20 (4).jpg";
import exchange from "./asset/2022-04-20 (2).jpg";
import messenger from "./asset/messenger.jpg";

function App() {
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
      <Header />
      <Projects data={data} />
      <Contact />
      <Player />
    </div>
  );
}

export default App;
