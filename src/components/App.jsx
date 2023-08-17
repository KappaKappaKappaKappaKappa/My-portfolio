import Header from "./Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Practice from "./Practice";
function App() {
  return (
    <div className="body">
      <Header />
      <main className="main">
        <Welcome />
        <AboutMe />
        <Practice />
      </main>
    </div>
  );
}

export default App;
