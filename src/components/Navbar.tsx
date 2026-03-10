import { motion } from "motion/react";
import { Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Atuação", href: "#atuacao" },
    { name: "Atendimento", href: "#atendimento" },
    { name: "Ebooks", href: "#ebooks" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pastel-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-pastel-orange rounded-full flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">B</span>
            </div>
            <span className="font-display font-bold text-xl text-gray-800 tracking-tight">
              Bianca Azevedo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-pastel-orange font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="http://wa.me/5514996009328"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pastel-orange text-white px-6 py-2.5 rounded-full font-display font-bold hover:bg-opacity-90 transition-all shadow-sm inline-block"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pastel-orange p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-pastel-gray"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-pastel-orange hover:bg-pastel-gray rounded-lg"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a 
                href="http://wa.me/5514996009328"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-pastel-orange text-white px-6 py-3 rounded-full font-display font-bold shadow-sm inline-block text-center"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
