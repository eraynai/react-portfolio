import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <Hero />
          <About />
          <Projects />
        </div>
      </main>
    </Router>
  );
}

export default App;
