import React from 'react';
import { BatteryCharging, Droplets, Smartphone, Settings, Cpu, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <BatteryCharging className="w-10 h-10" />,
    title: "Troca de Bateria",
    desc: "Substituição rápida com componentes originais para restaurar a autonomia do seu aparelho."
  },
  {
    icon: <Droplets className="w-10 h-10" />,
    title: "Danos por Água",
    desc: "Processo avançado de desoxidação e recuperação de placas lógicas afetadas por líquidos."
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Troca de Tela",
    desc: "Telas de alta qualidade com brilho e sensibilidade originais. Garantia inclusa."
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Diagnóstico Completo",
    desc: "Análise detalhada de hardware e software para identificar falhas ocultas gratuitamente."
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "Reparo de Placa",
    desc: "Microsoldagem avançada para recuperar aparelhos dados como 'sem conserto'."
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Software & Backup",
    desc: "Recuperação de sistema, remoção de vírus e backup seguro dos seus dados."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl font-bold text-white mb-4 relative inline-block">
            SERVIÇOS <span className="text-neon-blue">ESPECIALIZADOS</span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
          </h2>
          <p className="font-roboto text-gray-400 max-w-2xl mx-auto mt-4">
            Tecnologia de ponta para resolver qualquer problema do seu smartphone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-glass-bg border border-glass-border hover:border-neon-blue p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-neon"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-blue/10 to-transparent -z-10 group-hover:from-neon-blue/20 transition-all"></div>
              
              <div className="mb-6 p-4 bg-black/50 inline-block rounded-full border border-white/10 group-hover:border-neon-blue text-white group-hover:text-neon-blue transition-all shadow-lg">
                {service.icon}
              </div>
              
              <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="font-roboto text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;