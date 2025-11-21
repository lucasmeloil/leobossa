import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-deep-blue/30 border-y border-glass-border backdrop-blur-sm">
        {/* Background Tech Pattern overlay could go here */}
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-neon-blue/20 blur-3xl rounded-full transform -translate-x-10 -translate-y-10"></div>
                <div className="relative z-10 border-2 border-neon-blue p-2 rounded-lg">
                     <img 
                        src="https://picsum.photos/800/600?grayscale" 
                        alt="Leo Bossa Técnico" 
                        className="w-full h-auto rounded-lg shadow-2xl filter contrast-125"
                     />
                     {/* Overlay UI elements */}
                     <div className="absolute -bottom-6 -right-6 bg-black border border-neon-blue p-6 shadow-neon hidden md:block">
                        <p className="font-orbitron text-4xl font-bold text-neon-blue">10+</p>
                        <p className="font-roboto text-white text-sm uppercase tracking-widest">Anos de<br/>Experiência</p>
                     </div>
                </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white">
                    SOBRE <span className="text-neon-blue">LEO BOSSA</span>
                </h2>
                <div className="h-1 w-20 bg-neon-blue"></div>
                
                <p className="font-roboto text-gray-300 leading-relaxed text-lg">
                    "Com anos de experiência em assistência técnica de telefones, sou referência em qualidade e confiança em Cascavel. Minha missão não é apenas consertar aparelhos, mas restaurar a sua conexão com o mundo."
                </p>
                
                <p className="font-roboto text-gray-400 leading-relaxed">
                    Cada reparo é feito com precisão cirúrgica, utilizando as melhores ferramentas do mercado e peças de procedência garantida. Tratamos seu dispositivo como se fosse nosso.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {['Certificação Técnica', 'Laboratório Próprio', 'Garantia Estendida', 'Peças Originais'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white font-orbitron text-sm">
                            <span className="w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]"></span>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="pt-6">
                    <a href="#contact" className="text-neon-blue font-bold font-orbitron hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest text-sm">
                        Fale com o especialista <span className="text-xl">→</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;