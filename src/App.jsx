import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Links from "./components/Links";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Links />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
