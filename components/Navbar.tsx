import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Como Funciona', href: '#process' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-glass-border py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
             {/* Image Logo with Fallback to Icon if image missing */}
             <div className="w-12 h-12 rounded-full border-2 border-neon-blue shadow-neon overflow-hidden bg-black flex items-center justify-center group-hover:shadow-neon-hover transition-all duration-300">
                {!logoError ? (
                  <img 
                    src="/logo.png" 
                    alt="Léo Bossa" 
                    className="w-full h-full object-cover"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <Smartphone className="w-6 h-6 text-neon-blue" />
                )}
             </div>
          </div>
          <span className="font-orbitron font-bold text-xl tracking-wider text-white group-hover:text-neon-blue transition-colors">
            LEO <span className="text-neon-blue">BOSSA</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-roboto text-sm uppercase tracking-widest text-gray-300 hover:text-neon-blue hover:shadow-neon transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-neon-blue text-neon-blue font-orbitron font-bold rounded-sm hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-neon hover:shadow-neon-hover"
          >
            REPARAR AGORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-glass-border p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-orbitron text-white hover:text-neon-blue py-2 block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;