import Header from "./Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Practice from "./Practice";
import Stack from "./Stack";
import Projects from "./Projects";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

function App() {
  const [isReactTabActive, setIsReactTabActive] = useState<boolean>(false);
  const [isLayoutTabActive, setIsLayoutTabActive] = useState<boolean>(true);
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const [isEnlishVersion, setIsEnglishVersion] = useState<boolean>(false);

  const handleClickEnglishBtn = (): void => {
    setIsEnglishVersion(!isEnlishVersion);
  };

  const handleClickDropdown = (): void => {
    setIsDropdownActive(!isDropdownActive);
  };

  const hadleSwitchTheme = (): void => {
    setIsThemeDark(!isThemeDark);
  };

  const handleClickLayoutTab = (): void => {
    setIsReactTabActive(false);
    setIsLayoutTabActive(true);
  };

  const handleClickReactTab = (): void => {
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
      <Header
        onSwitchDarkTheme={hadleSwitchTheme}
        isThemeDark={isThemeDark}
        isDropdownActive={isDropdownActive}
        onClickDropdown={handleClickDropdown}
        isEnlishVersion={isEnlishVersion}
        onClickEnglishBtn={handleClickEnglishBtn}
      />
      <main className="main">
        <Welcome isThemeDark={isThemeDark} isEnlishVersion={isEnlishVersion} />
        <AboutMe isThemeDark={isThemeDark} isEnlishVersion={isEnlishVersion} />
        <Practice isEnlishVersion={isEnlishVersion} />
        <Stack isEnlishVersion={isEnlishVersion} />
        <Projects
          isReactTabActive={isReactTabActive}
          isLayoutTabActive={isLayoutTabActive}
          onClickReactTab={handleClickReactTab}
          onClickLayoutTab={handleClickLayoutTab}
          isThemeDark={isThemeDark}
          isEnlishVersion={isEnlishVersion}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
