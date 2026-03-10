import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-pastel-orange rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
      >
        {/* Decorative dots */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-dot-pattern pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium text-sm mb-6">
            <Sparkles size={16} />
            <span>Vamos começar essa jornada?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-6">
            Cuide da alimentação desde o começo da vida
          </h2>
          <p className="text-base md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Receba orientação nutricional especializada para cada fase da gestação, do bebê e da infância.
          </p>
          <a 
            href="http://wa.me/5514996009328"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pastel-orange px-8 md:px-10 py-3 md:py-4 rounded-full font-display font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-xl inline-block"
          >
            Agendar consulta agora
          </a>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </motion.div>
    </section>
  );
}
