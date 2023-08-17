import Header from "./Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Practice from "./Practice";
import Stack from "./Stack";

function App() {
  return (
    <div className="body">
      <Header />
      <main className="main">
        <Welcome />
        <AboutMe />
        <Practice />
        <Stack />
      </main>
    </div>
  );
}

export default App;
