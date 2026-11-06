import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Internship } from './components/sections/Internship';
import { Certifications } from './components/sections/Certifications';
import { Volunteer } from './components/sections/Volunteer';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <Certifications />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
