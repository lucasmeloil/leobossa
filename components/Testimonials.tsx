import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Maria Oliveira",
    location: "Cascavel, PR",
    text: "Meu celular estava inutilizável, mas o LEO BOSSA resolveu em poucas horas. Atendimento impecável e preço justo!",
    model: "iPhone 11"
  },
  {
    name: "João Santos",
    location: "Cascavel, PR",
    text: "Achei que tinha perdido todos os meus dados. O Leo não só consertou a placa como recuperou minhas fotos. Recomendo demais!",
    model: "Samsung S21"
  },
  {
    name: "Pedro Costa",
    location: "Cascavel, PR",
    text: "Rápido, transparente e honesto. Me explicou exatamente o que precisava ser feito sem enrolação.",
    model: "Xiaomi Note 10"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-deep-blue/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center text-white mb-16">
          CLIENTES <span className="text-neon-blue">SATISFEITOS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-glass-bg border-t border-b border-glass-border p-8 relative group hover:bg-white/5 transition-colors">
              <div className="flex gap-1 text-neon-blue mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="font-roboto text-gray-300 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white border border-neon-blue/50">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-orbitron text-white text-sm">{review.name}</h4>
                  <p className="font-roboto text-gray-500 text-xs">{review.location} • {review.model}</p>
                </div>
              </div>
              
              {/* Decorative border accents */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-neon-blue group-hover:w-full transition-all duration-700"></div>
              <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-neon-blue group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;