import Header from "./Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Practice from "./Practice";
import Stack from "./Stack";
import Projects from "./Projects";

function App() {
  return (
    <div className="body">
      <Header />
      <main className="main">
        <Welcome />
        <AboutMe />
        <Practice />
        <Stack />
        <Projects />
      </main>
    </div>
  );
}

export default App;
