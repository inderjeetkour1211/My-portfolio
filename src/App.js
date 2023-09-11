import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import SocialLinks from "./Components/SocialLinks";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
