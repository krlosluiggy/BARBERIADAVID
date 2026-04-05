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

const Cookies = () => (
  <>
    <Helmet>
      <title>Política de Cookies | Barbería Ricardo David</title>
      <meta name="description" content="Política de cookies de Barbería Ricardo David. Información sobre el uso de cookies en nuestro sitio web." />
      <link rel="canonical" href="https://barberiaricarddavid.com/cookies" />
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
          <h1 className="text-4xl font-display font-bold text-charcoal">Política de <span className="text-gold">Cookies</span></h1>
          <p className="text-gray-500 mt-3 text-sm">Última actualización: abril 2026</p>
        </motion.div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <Section title="¿Qué son las cookies?">
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo al visitarlos. Permiten recordar preferencias y mejorar la experiencia de navegación.</p>
          </Section>

          <Section title="Cookies que utilizamos">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse mt-2">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-bold text-charcoal">Nombre</th>
                    <th className="text-left p-3 border border-gray-200 font-bold text-charcoal">Tipo</th>
                    <th className="text-left p-3 border border-gray-200 font-bold text-charcoal">Finalidad</th>
                    <th className="text-left p-3 border border-gray-200 font-bold text-charcoal">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">cookie_consent</td>
                    <td className="p-3 border border-gray-200">Técnica</td>
                    <td className="p-3 border border-gray-200">Recordar aceptación de cookies</td>
                    <td className="p-3 border border-gray-200">1 año</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">session</td>
                    <td className="p-3 border border-gray-200">Técnica</td>
                    <td className="p-3 border border-gray-200">Funcionamiento del sitio</td>
                    <td className="p-3 border border-gray-200">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Cookies de terceros">
            <p>El mapa de Google Maps embebido en nuestro sitio puede establecer cookies propias de Google. Consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">política de privacidad de Google</a> para más información.</p>
          </Section>

          <Section title="¿Cómo gestionar las cookies?">
            <p>Puedes configurar tu navegador para rechazar o eliminar cookies. Ten en cuenta que esto puede afectar el funcionamiento del sitio:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad</li>
            </ul>
          </Section>

          <Section title="Contacto">
            <p>Para dudas sobre cookies o privacidad: <strong>+58 426-2015664</strong></p>
          </Section>
        </div>
      </div>
    </div>
  </>
);

export default Cookies;
