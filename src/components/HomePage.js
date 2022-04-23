import React from "react";

import Projects from "./projects/Projects";
import Contact from "./Contact";
import Header from "./Header/Header";

const HomePage = ({ data }) => {
  return (
    <div>
      <Header />
      <Projects data={data} />
      <Contact />
    </div>
  );
};

export default HomePage;
