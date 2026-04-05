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

const Terminos = () => (
  <>
    <Helmet>
      <title>Términos y Condiciones | Barbería Ricardo David</title>
      <meta name="description" content="Términos y condiciones de uso del sitio web y servicios de Barbería Ricardo David en Guanare, Portuguesa, Venezuela." />
      <link rel="canonical" href="https://barberiaricarddavid.com/terminos" />
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
          <h1 className="text-4xl font-display font-bold text-charcoal">Términos y <span className="text-gold">Condiciones</span></h1>
          <p className="text-gray-500 mt-3 text-sm">Última actualización: abril 2026</p>
        </motion.div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <Section title="1. Aceptación de los términos">
            <p>Al acceder y utilizar el sitio web de Barbería Ricardo David, usted acepta cumplir y estar sujeto a los presentes términos y condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro sitio.</p>
          </Section>

          <Section title="2. Descripción del servicio">
            <p>Barbería Ricardo David ofrece servicios de corte de cabello, arreglo de barba y cuidado personal masculino en Guanare, Portuguesa, Venezuela. La información publicada en este sitio es meramente informativa.</p>
          </Section>

          <Section title="3. Reservas y citas">
            <p>Las citas pueden solicitarse a través del formulario de contacto o por WhatsApp. Una cita confirmada implica el compromiso de asistir puntualmente. Cancelaciones deben realizarse con al menos 2 horas de anticipación.</p>
            <p>Barbería Ricardo David se reserva el derecho de rechazar o cancelar citas en casos de comportamiento inapropiado o fuerza mayor.</p>
          </Section>

          <Section title="4. Precios">
            <p>Los precios mostrados son referenciales y pueden variar sin previo aviso. El precio definitivo será informado al momento de la cita. Los pagos se realizan en el local al finalizar el servicio.</p>
          </Section>

          <Section title="5. Propiedad intelectual">
            <p>Todo el contenido de este sitio (imágenes, textos, logo, diseño) es propiedad exclusiva de Barbería Ricardo David. Queda prohibida su reproducción sin autorización expresa.</p>
          </Section>

          <Section title="6. Limitación de responsabilidad">
            <p>Barbería Ricardo David no se responsabiliza por daños derivados del uso incorrecto de la información publicada en este sitio ni por interrupciones en el servicio web.</p>
          </Section>

          <Section title="7. Modificaciones">
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor desde su publicación en el sitio.</p>
          </Section>

          <Section title="8. Contacto">
            <p>Para consultas sobre estos términos, puede contactarnos en: <strong>+58 426-2015664</strong> o a través de nuestro formulario de contacto.</p>
          </Section>
        </div>
      </div>
    </div>
  </>
);

export default Terminos;
