import Header from "./Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Practice from "./Practice";
import Stack from "./Stack";
import Projects from "./Projects";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isReactTabActive, setIsReactTabActive] = useState(false);
  const [isLayoutTabActive, setIsLayoutTabActive] = useState(true);
  const [isThemeDark, setIsThemeDark] = useState(false);

  const hadleSwitchTheme = () => {
    setIsThemeDark(true);
  };

  const handleClickLayoutTab = () => {
    setIsReactTabActive(false);
    setIsLayoutTabActive(true);
  };

  const handleClickReactTab = () => {
    setIsReactTabActive(true);
    setIsLayoutTabActive(false);
  };

  useEffect(() => {
    if (isThemeDark) {
      document.documentElement.classList.add("root_theme_dark");
    } else {
      document.documentElement.classList.remove("root_theme_dark");
    }
  }, [isThemeDark]);

  return (
    <>
      <Header onSwitchTheme={hadleSwitchTheme} />
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
    </>
  );
}

export default App;
