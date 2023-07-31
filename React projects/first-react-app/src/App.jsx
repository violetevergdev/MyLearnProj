/** @format */

import { Main } from "./components/main/Main";
import { Navbar } from "./components/nav/Navbar";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contacts } from "./components/contacts/Contacts";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Main />
      </div>
      <About />
      <div className="container">
        <Skills />
      </div>
      <Portfolio />
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
