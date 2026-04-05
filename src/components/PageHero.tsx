import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  tag: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
}

const PageHero = ({ tag, title, highlight, description, image }: PageHeroProps) => (
  <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-charcoal">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40 z-10" />
      <img src={image} alt={title} loading="eager" decoding="async" className="w-full h-full object-cover object-center opacity-50" referrerPolicy="no-referrer" />
    </div>
    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20" />

    <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20 w-full pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="max-w-xl"
      >
        <span className="inline-block py-1 px-4 bg-gold/20 text-gold rounded-full text-xs font-bold tracking-widest mb-6 border border-gold/30 uppercase">
          {tag}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6 text-white">
          {title} <span className="text-gold">{highlight}</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-10 max-w-md leading-relaxed">{description}</p>
        <a
          href="/#contacto"
          className="inline-flex items-center gap-2 bg-gold text-white px-7 py-4 rounded-full font-bold hover:bg-white hover:text-charcoal transition-all group text-sm sm:text-base"
        >
          Reservar Ahora <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
