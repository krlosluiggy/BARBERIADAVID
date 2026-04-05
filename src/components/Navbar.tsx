import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // En páginas internas siempre fondo sólido
  const forceScrolled = !isHome || isScrolled;
  const textColor = forceScrolled ? 'text-charcoal' : 'text-white';

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Galería', href: '/#galeria' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${forceScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo Barbería Ricardo David" className="w-16 h-16 object-contain rounded-full border-2 border-gold/50 bg-black/10 p-1 drop-shadow-md" />
          <span className={`text-xl md:text-2xl font-display font-bold tracking-tighter transition-colors duration-300 ${textColor}`}>
            BARBERIA<span className="text-gold"> RICARDO DAVID</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-gold transition-colors duration-300 ${textColor}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contacto"
            className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-charcoal transition-all duration-300"
          >
            RESERVAR CITA
          </a>
        </div>

        <button className={`md:hidden transition-colors duration-300 ${textColor}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contacto"
              className="bg-gold text-white px-6 py-3 rounded-xl text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESERVAR CITA
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
