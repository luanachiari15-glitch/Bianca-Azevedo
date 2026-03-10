import { motion } from "motion/react";
import { BookOpen, CheckCircle2 } from "lucide-react";

const ebooks = [
  {
    title: "Introdução Alimentar sem Medo",
    description: "Um guia prático para ajudar mães e pais a iniciarem a alimentação do bebê com segurança e tranquilidade.",
    features: [
      "Quando começar a IA",
      "Primeiros alimentos ideais",
      "Como montar as refeições",
      "Alimentos a evitar",
      "Dicas para novos sabores"
    ],
    color: "bg-pastel-mint",
    image: "https://i.imgur.com/ETT6M8k.png"
  },
  {
    title: "Cardápios 6 a 12 Meses",
    description: "Um material prático com sugestões de refeições equilibradas para o dia a dia do seu bebê.",
    features: [
      "Cardápios semanais",
      "Combinações de alimentos",
      "Papinhas nutritivas",
      "Textura e evolução",
      "Receitas práticas"
    ],
    color: "bg-pastel-blue",
    image: "https://i.imgur.com/NCOK4ZP.png"
  },
  {
    title: "Lidando com a Seletividade",
    description: "Um guia para pais que enfrentam dificuldades com crianças que recusam alimentos.",
    features: [
      "Por que acontece?",
      "Erros comuns dos pais",
      "Estratégias de aceitação",
      "Dicas práticas diárias",
      "Exemplos reais"
    ],
    color: "bg-pastel-yellow",
    image: "https://i.imgur.com/DP1DJJC.png"
  }
];

export default function Ebooks() {
  return (
    <section id="ebooks" className="py-20 bg-pastel-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-mint/20 text-pastel-mint font-medium text-sm mb-4">
            <BookOpen size={16} />
            <span>Materiais Educativos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Produtos Digitais (Ebooks)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conteúdos informativos e educativos para te guiar em cada etapa.
            <span className="block text-xs mt-2 text-gray-400 italic">* Estes ebooks são conteúdos informativos, não substituem consulta individualizada.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 ${ebook.color} opacity-20`}></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {ebook.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {ebook.description}
                </p>
                <div className="space-y-2 mb-8 flex-grow">
                  {ebook.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-pastel-mint" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 rounded-xl font-display font-bold text-white ${ebook.color.replace('bg-', 'bg-opacity-90 bg-')} hover:bg-opacity-100 transition-all shadow-sm`}>
                  Quero este ebook
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
