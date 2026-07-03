import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Roadmap />
      <Contact />
    </>
  );
}