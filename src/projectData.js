//images
import todo from "./asset/todo.jpg";
import store from "./asset/store.jpg";
import exchange from "./asset/exchange.jpg";
import messenger from "./asset/messenger.jpg";
import AdminPanel from "./asset/admin-panel.png";

export const data = [
  {
    id: 1,
    image: store,
    name: "Msud Store",
    href: "https://msud-store.netlify.app/",
    technology: ["react", "redux", "tailwind", "axios", "SPA", "PWA"],
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
    technology: ["react", "tailwind", "axios", "context & reducer", "SPA"],
    capabilities: ["Search Coins", "Detail Coin", "Charts", "Dark theme"],
  },
  {
    id: 3,
    image: todo,
    name: "Todo App",
    href: "https://msud-todo.netlify.app/",
    technology: ["react", "SASS", "context & reducer ", "axios"],
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
  {
    id: 5,
    image: AdminPanel,
    name: "Admin Panel",
    href: "https://msud-admin-panel.vercel.app",
    technology: [
      "react",
      "redux",
      "tailwindCSS",
      "axios",
      "Material UI",
      "react chart",
      "Swiper",
    ],
    capabilities: [
      "edit users",
      "add user",
      "edit products",
      "detail charts",
      "auth",
    ],
  },
];
