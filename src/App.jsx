import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Navbar } from "./layout/Navbar";
import ParticlesContainer from "./components/ParticlesContainer";
import { Arsenal } from "./components/Arsenal";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-white">
      <ParticlesContainer />
      <Navbar />
      <Hero />
      <About />
      <Arsenal />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
