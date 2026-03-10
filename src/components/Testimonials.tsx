import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula",
    role: "Mãe do Theo (8 meses)",
    content: "A Bianca foi essencial na introdução alimentar do Theo. Eu estava muito insegura, mas com o guia e as consultas online, tudo fluiu com leveza e ele adora experimentar novos sabores!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Juliana Mendes",
    role: "Gestante (32 semanas)",
    content: "O acompanhamento durante a gestação me deu muita tranquilidade. Aprendi a me alimentar melhor para o desenvolvimento da minha bebê e controlei os enjoos de forma natural.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Carla Silveira",
    role: "Mãe da Alice (3 anos)",
    content: "Alice era muito seletiva e as refeições eram um campo de batalha. Com as estratégias da Bia, hoje ela participa da cozinha e aceita provar alimentos que antes nem chegavam perto.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            O que as mamães dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Histórias reais de famílias que transformaram sua relação com a comida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-pastel-gray/20 p-8 rounded-[2rem] relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-pastel-orange rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote size={20} fill="currentColor" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-pastel-yellow fill-pastel-yellow" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
