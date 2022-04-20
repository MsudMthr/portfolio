import React from 'react';

import Header from './components/Header/Header';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="scroll-smooth transition-all ease-out">
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
