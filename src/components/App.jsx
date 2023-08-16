import Header from "./Header";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
function App() {
  return (
    <div className="body">
      <Header />
      <main className="main">
        <Welcome />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
