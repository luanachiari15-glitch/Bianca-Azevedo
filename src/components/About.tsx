import { motion } from "motion/react";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-pastel-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-1 max-w-md mx-auto lg:mx-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-pastel-orange/10 rounded-[2rem] -z-10"></div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white p-2 shadow-sm border border-gray-50">
                <img
                  src="https://imgur.com/FCtsm9T.jpg"
                  alt="Bianca Azevedo"
                  className="w-full h-full object-cover rounded-[1.25rem]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-pastel-orange/10 max-w-[160px]">
                <p className="font-display font-bold text-pastel-orange text-base mb-0.5 text-center">9 anos</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 text-center font-medium">de experiência</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Olá, eu sou a <span className="text-pastel-orange">Bianca Azevedo</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A nutricionista Bianca Azevedo é especializada em nutrição materno-infantil e dedica sua carreira a ajudar mães e famílias a construírem uma relação saudável com a alimentação desde os primeiros momentos da vida.
              </p>
              <p>
                Formada em Nutrição pela Universidade Federal de São Paulo (UNIFESP), Bianca atua há 9 anos na área de nutrição clínica com foco em gestantes, bebês e crianças.
              </p>
              <p className="font-medium text-gray-800">Ao longo da sua trajetória, aprofundou sua formação em:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Nutrição na gestação",
                  "Introdução alimentar",
                  "Seletividade alimentar",
                  "Nutrição para lactantes",
                  "Comportamento infantil"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pastel-mint"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Sua abordagem é baseada em ciência, acolhimento e individualidade, respeitando o ritmo de cada família e de cada criança. Bianca acredita que a alimentação é construída com carinho, informação e orientação adequada.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
