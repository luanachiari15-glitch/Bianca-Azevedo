import { motion } from "motion/react";

const steps = [
  {
    number: "1",
    title: "Primeira consulta",
    description: "Avaliação completa da rotina alimentar, histórico de saúde, fase da gestação ou desenvolvimento da criança.",
    color: "bg-pastel-orange",
  },
  {
    number: "2",
    title: "Plano alimentar personalizado",
    description: "Orientações práticas adaptadas à realidade da família, respeitando gostos e necessidades.",
    color: "bg-pastel-blue",
  },
  {
    number: "3",
    title: "Acompanhamento",
    description: "Ajustes ao longo do processo para acompanhar a evolução da mãe ou da criança.",
    color: "bg-pastel-mint",
  },
  {
    number: "4",
    title: "Suporte e orientação",
    description: "Espaço para tirar dúvidas e receber orientações ao longo de todo o acompanhamento.",
    color: "bg-pastel-yellow",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-pastel-gray/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Como funciona o atendimento
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um processo estruturado para garantir que você e sua família recebam o melhor suporte nutricional.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-pastel-orange/20 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-xl mb-6 shadow-md`}>
                  {step.number}
                </div>
                <h3 className="text-lg font-display font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
