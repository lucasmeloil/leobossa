import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      {/* Decorative glow spots */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left relative z-10">
          <div className="inline-block px-4 py-1 border border-neon-blue/50 rounded-full bg-neon-blue/5 backdrop-blur-sm mb-2">
            <span className="text-neon-blue font-roboto text-xs tracking-[0.2em] uppercase">Especialista em Apple & Android</span>
          </div>
          
          <div className="relative">
            <div className="flex items-end lg:items-center justify-center lg:justify-start relative">
               <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-lg relative z-10">
                SEU CELULAR, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-blue">NOSSA MISSÃO.</span>
              </h1>
              
              {/* Mascot Image - Positioned to the right of text on large screens */}
              <img 
                src="/mascot.png" 
                alt="Mascote Léo Bossa" 
                className="hidden xl:block absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-auto object-contain drop-shadow-[0_0_20px_rgba(0,243,255,0.6)] animate-float"
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              />
            </div>
          </div>
          
          <p className="font-roboto text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 border-l-2 border-neon-blue pl-6">
            Assistência técnica especializada com <span className="text-neon-blue font-bold">LEO BOSSA</span>. Conserto rápido, seguro e profissional. Confie em quem entende de tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-neon-blue/10 border border-neon-blue text-neon-blue font-orbitron font-bold uppercase tracking-wider overflow-hidden transition-all hover:bg-neon-blue hover:text-black hover:shadow-neon-hover"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicite Reparo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-glass-bg backdrop-blur-xl border border-glass-border p-8 rounded-lg shadow-2xl">
                {/* Mobile Mascot Visibility (Small floating head on mobile/tablet top right) */}
                <img 
                   src="/mascot.png" 
                   alt="Mascote"
                   className="xl:hidden absolute -top-16 right-0 w-24 h-auto object-contain drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] rotate-6"
                />

                <h3 className="font-orbitron text-2xl text-white mb-2">Orçamento Rápido</h3>
                <p className="font-roboto text-gray-400 text-sm mb-6">Preencha para receber contato prioritário.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-neon-blue mb-1 font-orbitron">Nome</label>
                        <input 
                            type="text" 
                            className="w-full bg-black/40 border border-white/10 focus:border-neon-blue rounded-sm p-3 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:shadow-neon"
                            placeholder="Seu nome completo"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-neon-blue mb-1 font-orbitron">E-mail</label>
                        <input 
                            type="email" 
                            className="w-full bg-black/40 border border-white/10 focus:border-neon-blue rounded-sm p-3 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:shadow-neon"
                            placeholder="seu@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-neon-blue mb-1 font-orbitron">Telefone</label>
                        <input 
                            type="tel" 
                            className="w-full bg-black/40 border border-white/10 focus:border-neon-blue rounded-sm p-3 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:shadow-neon"
                            placeholder="(XX) 99999-9999"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-neon-blue mb-1 font-orbitron">Modelo / Problema</label>
                        <textarea 
                            rows={2}
                            className="w-full bg-black/40 border border-white/10 focus:border-neon-blue rounded-sm p-3 text-white placeholder-gray-600 outline-none transition-all duration-300 focus:shadow-neon"
                            placeholder="Ex: iPhone 13, tela quebrada..."
                        />
                    </div>

                    <button className="w-full py-4 bg-neon-blue text-black font-orbitron font-black tracking-widest uppercase hover:bg-white transition-colors shadow-neon hover:shadow-white/50 mt-2">
                        ENVIAR SOLICITAÇÃO
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;