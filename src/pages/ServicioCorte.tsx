import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const features = [
  'Consulta personalizada de estilo',
  'Corte adaptado a tu tipo de rostro',
  'Técnicas fade, taper y clásico',
  'Acabado con productos premium',
  'Asesoría de imagen sin costo adicional',
];

const ServicioCorte = () => (
  <>
    <Helmet>
      <title>Corte de Autor | Barbería Ricardo David – Guanare, Venezuela</title>
      <meta name="description" content="Corte de cabello personalizado en Guanare, Portuguesa. Técnicas fade, taper y clásico adaptadas a tu estilo y tipo de rostro. Barbería Ricardo David." />
      <meta name="keywords" content="corte de cabello guanare, barbería guanare, fade guanare, taper guanare, corte hombre venezuela" />
      <link rel="canonical" href="https://barberiaricarddavid.com/servicios/corte" />
      <meta property="og:title" content="Corte de Autor | Barbería Ricardo David" />
      <meta property="og:description" content="Corte personalizado en Guanare, Portuguesa. Fade, taper y clásico con acabado premium." />
      <meta property="og:type" content="website" />
    </Helmet>

    <PageHero
      tag="Nuestro servicio estrella"
      title="Corte de"
      highlight="Autor"
      description="Corte personalizado según tu fisionomía y estilo de vida. Precisión y detalle en cada trazo para resaltar tu mejor versión."
      image="https://images.unsplash.com/photo-1621605815841-2dddb39709a2?auto=format&fit=crop&q=75&w=1920"
    />

    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">¿Qué incluye el <span className="text-gold">Corte de Autor</span>?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Cada corte es una experiencia única diseñada para ti.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl"
            >
              <CheckCircle className="text-gold w-5 h-5 shrink-0" />
              <span className="text-sm font-medium">{f}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-charcoal text-white rounded-3xl p-10 text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-3">¿Listo para tu nuevo estilo?</h3>
          <p className="text-gray-400 mb-6">Reserva tu cita ahora y experimenta la diferencia.</p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 rounded-full font-bold hover:bg-white hover:text-charcoal transition-all group"
          >
            Reservar Cita <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  </>
);

export default ServicioCorte;
