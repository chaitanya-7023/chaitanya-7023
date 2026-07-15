import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumeSection from './components/ResumeSection';
import Journey from './components/Journey';
import GithubAnalytics from './components/GithubAnalytics';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResumeSection />
        <Journey />
        <GithubAnalytics />
        <Contact />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
