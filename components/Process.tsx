import React from 'react';
import { MessageSquare, Search, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <MessageSquare />,
    title: "Solicite",
    desc: "Preencha o formulário ou chame no WhatsApp."
  },
  {
    id: 2,
    icon: <Search />,
    title: "Diagnóstico",
    desc: "Avaliamos o problema gratuitamente."
  },
  {
    id: 3,
    icon: <Zap />,
    title: "Conserto",
    desc: "Reparo ágil com peças de alta qualidade."
  },
  {
    id: 4,
    icon: <CheckCircle />,
    title: "Pronto",
    desc: "Seu aparelho novo em folha em suas mãos."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="font-orbitron text-4xl font-bold text-white">
            COMO <span className="text-neon-blue">FUNCIONA</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-glass-border -z-10"></div>

            {steps.map((step, index) => (
                <div key={step.id} className="relative flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-black border-2 border-neon-blue rounded-full flex items-center justify-center text-neon-blue mb-6 shadow-neon group-hover:scale-110 transition-transform duration-300 bg-opacity-80 backdrop-blur-md relative z-10">
                        <div className="w-10 h-10 [&>svg]:w-full [&>svg]:h-full">
                            {step.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black font-bold rounded-full flex items-center justify-center font-orbitron border border-neon-blue">
                            {step.id}
                        </div>
                    </div>
                    
                    <h3 className="font-orbitron text-xl text-white mb-2 group-hover:text-neon-blue transition-colors">
                        {step.title}
                    </h3>
                    <p className="font-roboto text-gray-400 text-sm px-4">
                        {step.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;