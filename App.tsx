import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <CallToAction />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default App;