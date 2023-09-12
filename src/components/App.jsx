import Header from "./Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Practice from "./Practice";
import Stack from "./Stack";
import Projects from "./Projects";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [isReactTabActive, setIsReactTabActive] = useState(false);
  const [isLayoutTabActive, setIsLayoutTabActive] = useState(true);

  const handleClickLayoutTab = () => {
    setIsReactTabActive(false);
    setIsLayoutTabActive(true);
  };

  const handleClickReactTab = () => {
    setIsReactTabActive(true);
    setIsLayoutTabActive(false);
  };

  return (
    <div className="body">
      <Header />
      <main className="main">
        <Welcome />
        <AboutMe />
        <Practice />
        <Stack />
        <Projects
          isReactTabActive={isReactTabActive}
          isLayoutTabActive={isLayoutTabActive}
          onClickReactTab={handleClickReactTab}
          onClickLayoutTab={handleClickLayoutTab}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
