import { motion } from "motion/react";
import { Apple, Cherry, Grape, Leaf, Citrus, Sprout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden min-h-[60vh] md:min-h-[80vh] flex items-center">
      {/* Decorative Elements - Minimalist Fruits scattered across full screen with unified blinking animation */}
      {/* 1. Sprout - Visible on Mobile (Small) and Desktop (Large) */}
      <div className="absolute top-[8%] left-[12%] md:top-[10%] md:left-[5%] text-pastel-orange opacity-20 animate-pulse animation-delay-1000">
        <Sprout className="w-8 h-8 md:w-20 md:h-20" />
      </div>
      {/* 2. Citrus - Visible on Mobile (Small) and Desktop (Large) */}
      <div className="absolute top-[25%] right-[8%] md:top-[15%] md:right-[10%] text-pastel-blue opacity-20 animate-pulse">
        <Citrus className="w-8 h-8 md:w-18 md:h-18" />
      </div>
      {/* 3. Apple - Visible on Mobile (Small) and Desktop (Large) */}
      <div className="absolute top-[40%] left-[18%] md:top-[40%] md:left-[15%] text-pastel-mint opacity-20 rotate-45 animate-pulse animation-delay-2000">
        <Apple className="w-8 h-8 md:w-24 md:h-24" />
      </div>
      {/* 4. Grape - Visible on Mobile (Small) and Desktop (Large) */}
      <div className="absolute top-[60%] right-[15%] md:top-[50%] md:right-[5%] text-pastel-lilac opacity-20 -rotate-12 animate-pulse">
        <Grape className="w-8 h-8 md:w-21 md:h-21" />
      </div>
      {/* 5. Leaf - Visible on Mobile (Small) and Desktop (Large) */}
      <div className="absolute bottom-[15%] left-[10%] md:bottom-[20%] md:left-[8%] text-pastel-orange opacity-20 animate-pulse animation-delay-1500">
        <Leaf className="w-8 h-8 md:w-16 md:h-16" />
      </div>
      {/* 6. Cherry - Visible on Mobile (Small) and Desktop (Large) */}
      <div className="absolute bottom-[25%] right-[25%] md:bottom-[10%] md:right-[20%] text-pastel-mint opacity-20 rotate-12 animate-pulse animation-delay-500">
        <Cherry className="w-8 h-8 md:w-22 md:h-22" />
      </div>

      {/* Remaining fruits - Desktop Only */}
      <div className="absolute top-[5%] right-[40%] text-pastel-yellow opacity-20 animate-pulse animation-delay-1500 hidden md:block">
        <Apple size={60} />
      </div>
      <div className="absolute bottom-[15%] left-[40%] text-pastel-blue opacity-20 animate-pulse animation-delay-700 hidden md:block">
        <Citrus size={76} />
      </div>
      <div className="absolute top-[60%] left-[30%] text-pastel-yellow opacity-20 -rotate-45 animate-pulse animation-delay-1000 hidden md:block">
        <Sprout size={68} />
      </div>
      <div className="absolute bottom-[5%] left-[20%] text-pastel-lilac opacity-20 rotate-12 animate-pulse animation-delay-2000 hidden md:block">
        <Grape size={72} />
      </div>
      {/* Interleaved Fruits - Desktop Only */}
      <div className="absolute top-[30%] right-[30%] text-pastel-orange opacity-20 animate-pulse animation-delay-300 hidden md:block">
        <Cherry size={55} />
      </div>
      <div className="absolute bottom-[40%] right-[25%] text-pastel-mint opacity-20 -rotate-12 animate-pulse animation-delay-1200 hidden md:block">
        <Sprout size={70} />
      </div>
      <div className="absolute top-[75%] right-[15%] text-pastel-yellow opacity-20 animate-pulse animation-delay-800 hidden md:block">
        <Apple size={50} />
      </div>
      <div className="absolute top-[25%] left-[35%] text-pastel-lilac opacity-20 rotate-45 animate-pulse animation-delay-1800 hidden md:block">
        <Citrus size={65} />
      </div>
      <div className="absolute bottom-[35%] left-[25%] text-pastel-blue opacity-20 animate-pulse animation-delay-400 hidden md:block">
        <Grape size={58} />
      </div>
      <div className="absolute top-[45%] right-[45%] text-pastel-mint opacity-20 rotate-12 animate-pulse animation-delay-900 hidden md:block">
        <Leaf size={45} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-orange/10 text-pastel-orange font-medium text-sm mb-6">
              <Apple size={16} />
              <span>Nutrição com amor e ciência</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-tight mb-6">
              Nutrição materno-infantil com <span className="text-pastel-orange">acolhimento</span>, ciência e cuidado
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Acompanhamento nutricional para gestantes, bebês e crianças, ajudando famílias a construírem uma relação saudável com a alimentação desde o início da vida.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="http://wa.me/5514996009328"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-pastel-orange text-white font-bold text-lg shadow-lg shadow-pastel-orange/20 hover:bg-pastel-orange/90 transition-all hover:scale-105 active:scale-95"
              >
                Agendar consulta
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
