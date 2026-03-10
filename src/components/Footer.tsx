import { Instagram, Facebook, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pastel-gray/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-pastel-orange rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">B</span>
              </div>
              <span className="font-display font-bold text-xl text-gray-800">
                Bianca Azevedo
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-sm mb-8 leading-relaxed">
              Nutricionista materno-infantil dedicada a construir bases saudáveis para o futuro das nossas crianças através de uma alimentação consciente e afetiva.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pastel-orange shadow-sm hover:scale-110 transition-transform">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pastel-orange shadow-sm hover:scale-110 transition-transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pastel-orange shadow-sm hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#sobre" className="hover:text-pastel-orange transition-colors">Sobre mim</a></li>
              <li><a href="#atuacao" className="hover:text-pastel-orange transition-colors">Áreas de atuação</a></li>
              <li><a href="#atendimento" className="hover:text-pastel-orange transition-colors">Atendimento</a></li>
              <li><a href="#ebooks" className="hover:text-pastel-orange transition-colors">Ebooks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-display font-bold text-gray-900 mb-6 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>contato@biancaazevedo.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
              <li>
                <a 
                  href="http://wa.me/5514996009328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pastel-orange font-bold underline underline-offset-4"
                >
                  Agendar consulta
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2026 Bianca Azevedo Nutrição. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            Feito com <Heart size={12} className="text-pastel-orange fill-pastel-orange" /> para mamães e bebês
          </div>
        </div>
      </div>
    </footer>
  );
}
