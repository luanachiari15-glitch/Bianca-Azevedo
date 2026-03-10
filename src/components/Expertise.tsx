import { motion } from "motion/react";
import { Baby, Heart, Apple, Salad, Utensils } from "lucide-react";

const areas = [
  {
    title: "Nutrição na Gestação",
    description: "Orientação nutricional para uma gestação saudável, ajudando a suprir as necessidades nutricionais da mãe e do bebê.",
    icon: Heart,
    color: "bg-pastel-orange",
  },
  {
    title: "Introdução Alimentar",
    description: "Orientação completa para iniciar a alimentação do bebê de forma segura, respeitando o desenvolvimento e os sinais de fome e saciedade.",
    icon: Baby,
    color: "bg-pastel-blue",
  },
  {
    title: "Alimentação do Bebê",
    description: "Planejamento alimentar para bebês de 6 a 24 meses, garantindo variedade e nutrientes importantes para o crescimento.",
    icon: Apple,
    color: "bg-pastel-mint",
  },
  {
    title: "Seletividade Alimentar",
    description: "Estratégias para lidar com crianças que recusam alimentos ou apresentam dificuldade para aceitar novos alimentos.",
    icon: Utensils,
    color: "bg-pastel-yellow",
  },
  {
    title: "Nutrição para Lactantes",
    description: "Apoio nutricional para mães durante o período de amamentação, garantindo saúde para ambos.",
    icon: Salad,
    color: "bg-pastel-lilac",
  },
];

export default function Expertise() {
  return (
    <section id="atuacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cuidado especializado para cada fase do desenvolvimento, desde o ventre materno até a infância.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 hover:border-pastel-orange/20 hover:shadow-xl hover:shadow-pastel-orange/5 transition-all group"
            >
              <div className={`${area.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <area.icon size={28} />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
