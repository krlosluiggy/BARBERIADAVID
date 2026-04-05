import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_consent');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-charcoal text-white rounded-2xl p-5 shadow-2xl border border-white/10"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="font-bold text-sm mb-1">🍪 Usamos cookies</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Utilizamos cookies técnicas para mejorar tu experiencia.{' '}
                <Link to="/cookies" className="text-gold hover:underline">Saber más</Link>
              </p>
            </div>
            <button onClick={() => setVisible(false)} className="text-gray-500 hover:text-white shrink-0 mt-0.5">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={accept}
              className="flex-1 bg-gold text-white py-2 rounded-xl text-xs font-bold hover:bg-white hover:text-charcoal transition-all"
            >
              Aceptar
            </button>
            <button
              onClick={() => setVisible(false)}
              className="flex-1 bg-white/5 text-gray-300 py-2 rounded-xl text-xs font-medium hover:bg-white/10 transition-all"
            >
              Rechazar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
