import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-glass-border relative pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-deep-blue to-black border border-neon-blue p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-neon relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-2">
              PRECISA DE AJUDA AGORA?
            </h2>
            <p className="font-roboto text-gray-400">
              Fale direto com o especialista e resolva seu problema hoje.
            </p>
          </div>
          <a 
            href="https://wa.me/" // Replace with actual link
            className="relative z-10 px-8 py-4 bg-neon-blue text-black font-orbitron font-bold rounded hover:bg-white transition-colors flex items-center gap-2 shadow-lg"
          >
            <MessageCircle />
            FALE NO WHATSAPP
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group w-fit">
               <div className="w-12 h-12 rounded-full border-2 border-neon-blue overflow-hidden bg-black shadow-neon">
                  <img src="/logo.png" alt="Léo Bossa" className="w-full h-full object-cover" />
               </div>
               <span className="font-orbitron font-bold text-2xl tracking-wider text-white group-hover:text-neon-blue transition-colors">
                LEO <span className="text-neon-blue">BOSSA</span>
               </span>
            </a>
            <p className="font-roboto text-gray-400 max-w-sm leading-relaxed mb-6">
              Assistência técnica premium. Tecnologia avançada para garantir a longevidade do seu dispositivo. Transparência e qualidade em primeiro lugar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron text-white font-bold mb-6">CONTATO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-neon-blue transition-colors">
                <Phone className="w-5 h-5 mt-1 text-neon-blue" />
                <span>(45) 9999-9999<br/><span className="text-xs text-gray-600">Seg-Sex: 08h - 18h</span></span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-neon-blue transition-colors">
                <Mail className="w-5 h-5 text-neon-blue" />
                <span>contato@leobossa.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-white font-bold mb-6">LOCALIZAÇÃO</h4>
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 mt-1 text-neon-blue" />
              <address className="not-italic">
                Rua Digital Tech, 456<br />
                Centro, Cascavel - PR<br />
                CEP: 85800-000
              </address>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-roboto uppercase tracking-wider">
          <p>© 2025 LEO BOSSA Assistência Técnica.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-blue transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;