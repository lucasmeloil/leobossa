import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CyberBackground from './components/CyberBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-neon-blue selection:text-black">
      {/* Background Animation */}
      <CyberBackground />
      
      <Navbar />
      
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;