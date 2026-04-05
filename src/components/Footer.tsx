import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo.png" alt="Logo Barbería Ricardo David" className="w-14 h-14 object-contain rounded-full border-2 border-gold/50 bg-white/5 p-1" />
              <span className="text-xl font-display font-bold tracking-tighter">
                BARBERIA<span className="text-gold"> RICARDO DAVID</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5">
              Dedicados al arte de la barbería masculina. Calidad, estilo y atención personalizada en un ambiente exclusivo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@farroportugues"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="TikTok @farroportugues"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-gold text-sm uppercase tracking-widest">Navegación</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><Link to="/servicios/corte" className="hover:text-white transition-colors">Corte de Autor</Link></li>
              <li><Link to="/servicios/barba" className="hover:text-white transition-colors">Barba Ritual</Link></li>
              <li><a href="/#galeria" className="hover:text-white transition-colors">Galería</a></li>
              <li><a href="/#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-gold text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Barbería Ricardo David. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/terminos" className="hover:text-gold transition-colors">Términos</Link>
            <Link to="/privacidad" className="hover:text-gold transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-gold transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
