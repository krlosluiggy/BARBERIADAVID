import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <h2 className="text-xl font-bold text-charcoal mb-3 border-l-4 border-gold pl-4">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-2">{children}</div>
  </motion.div>
);

const Privacidad = () => (
  <>
    <Helmet>
      <title>Política de Privacidad | Barbería Ricardo David</title>
      <meta name="description" content="Política de privacidad de Barbería Ricardo David. Conoce cómo tratamos tus datos personales." />
      <link rel="canonical" href="https://barberiaricarddavid.com/privacidad" />
    </Helmet>

    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3">Legal</span>
          <h1 className="text-4xl font-display font-bold text-charcoal">Política de <span className="text-gold">Privacidad</span></h1>
          <p className="text-gray-500 mt-3 text-sm">Última actualización: abril 2026</p>
        </motion.div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <Section title="1. Responsable del tratamiento">
            <p><strong>Barbería Ricardo David</strong> — Barrio El Milagro, Callejón Marabata, detrás de Traki, Guanare, Portuguesa, Venezuela. Contacto: +58 426-2015664.</p>
          </Section>

          <Section title="2. Datos que recopilamos">
            <p>A través del formulario de contacto recopilamos: nombre completo, correo electrónico, número de teléfono y el mensaje que nos envías. No recopilamos datos sensibles.</p>
          </Section>

          <Section title="3. Finalidad del tratamiento">
            <p>Los datos se utilizan exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responder a tus consultas y gestionar citas</li>
              <li>Enviarte información sobre nuestros servicios (solo si lo autorizas)</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
          </Section>

          <Section title="4. Conservación de datos">
            <p>Los datos se conservan durante el tiempo necesario para responder tu solicitud y hasta 1 año posterior, salvo que solicites su eliminación.</p>
          </Section>

          <Section title="5. Compartición de datos">
            <p>No vendemos, alquilamos ni compartimos tus datos personales con terceros, salvo obligación legal.</p>
          </Section>

          <Section title="6. Tus derechos">
            <p>Tienes derecho a acceder, rectificar y suprimir tus datos. Para ejercerlos, contáctanos en <strong>+58 426-2015664</strong>.</p>
          </Section>

          <Section title="7. Seguridad">
            <p>Implementamos medidas técnicas para proteger tus datos contra accesos no autorizados, pérdida o alteración.</p>
          </Section>

          <Section title="8. Cookies">
            <p>Utilizamos cookies técnicas para el funcionamiento del sitio. Consulta nuestra <a href="/cookies" className="text-gold hover:underline">Política de Cookies</a> para más información.</p>
          </Section>
        </div>
      </div>
    </div>
  </>
);

export default Privacidad;
