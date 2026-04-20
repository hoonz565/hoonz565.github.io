import React from 'react';
import Header from './components/Header';
import SocialSidebars from './components/SocialSidebars';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-navy min-h-screen font-sans text-slate selection:bg-lightest-navy selection:text-lightest-slate">
      <Header />
      <SocialSidebars />
      
      <main className="px-6 md:px-12 lg:px-24 mx-auto max-w-[1600px] w-full pt-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
