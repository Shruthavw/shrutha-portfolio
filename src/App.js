import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans scroll-smooth">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">© 2025 Your Name</footer>
    </div>
  );
}

export default App;
