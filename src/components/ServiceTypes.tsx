import { motion } from "motion/react";
import { MapPin, Video } from "lucide-react";

export default function ServiceTypes() {
  return (
    <section id="atendimento" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pastel-blue/10 p-10 rounded-[2.5rem] border border-pastel-blue/20"
          >
            <div className="w-14 h-14 bg-pastel-blue rounded-2xl flex items-center justify-center text-white mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4">
              Atendimento Presencial
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Consultas realizadas em consultório em ambiente acolhedor e preparado para receber mães e crianças com todo o conforto e segurança.
            </p>
            <button className="text-pastel-blue font-display font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver localização e horários <span>→</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-pastel-orange/10 p-10 rounded-[2.5rem] border border-pastel-orange/20"
          >
            <div className="w-14 h-14 bg-pastel-orange rounded-2xl flex items-center justify-center text-white mb-6">
              <Video size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4">
              Atendimento Online
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Consultas por vídeo para famílias de qualquer lugar do Brasil, com a mesma qualidade de orientação nutricional e suporte contínuo.
            </p>
            <button className="text-pastel-orange font-display font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Como funciona o online <span>→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
