import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import { Scissors, MapPin, Phone, Clock, ChevronRight, Award } from 'lucide-react';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import WhatsAppButtonComponent from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import ServicioCorte from './pages/ServicioCorte';
import ServicioBarba from './pages/ServicioBarba';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';
import CookiesPage from './pages/Cookies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import 'swiper/css';
import 'swiper/css/pagination';

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(7, "Teléfono inválido"),
  message: z.string().min(10, "El mensaje debe ser más detallado"),
});

type ContactFormValues = z.infer<typeof contactSchema>;


// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="inicio" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=75&w=1920"
          alt="Barber Shop"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Gold decorative line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20 w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block py-1 px-4 bg-gold/20 text-gold rounded-full text-xs font-bold tracking-widest mb-6 border border-gold/30 uppercase"
          >
            El Arte de la Barbería
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white">
            Estilo <span className="text-gold">Premium</span><br />para el Hombre<br />Moderno
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-10 max-w-md leading-relaxed">
            Más que un corte, una experiencia de lujo. Combinamos técnicas tradicionales con las tendencias más actuales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#servicios" className="bg-gold text-white px-7 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-charcoal transition-all group text-sm sm:text-base">
              Nuestros Servicios <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacto" className="border-2 border-white/40 text-white px-7 py-4 rounded-full font-bold hover:border-gold hover:text-gold transition-all text-center text-sm sm:text-base">
              Reservar Cita
            </a>
          </div>
        </motion.div>

        {/* Floating logo + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-8 right-6 sm:right-10 hidden sm:flex flex-col items-center gap-6"
        >
          {/* Floating logo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gold/30 blur-xl scale-110" />
            <img
              src="/images/logo.png"
              alt="Logo"
              className="relative w-60 h-60 object-contain rounded-full border-2 border-gold/50 bg-black/30 backdrop-blur-sm p-2 drop-shadow-2xl"
            />
          </motion.div>

          {/* Stats */}
          <div className="flex gap-6 md:gap-10">
            {[['1+', 'Año de Experiencia'], ['100+', 'Clientes Felices'], ['100%', 'Satisfacción']].map(([num, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.15 }}
                className="text-center"
              >
                <p className="text-gold font-display font-bold text-2xl md:text-3xl">{num}</p>
                <p className="text-gray-400 text-xs mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Services ─────────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    { title: 'Corte de Autor', desc: 'Corte personalizado según tu fisionomía y estilo de vida. Precisión y detalle en cada trazo.', icon: <Scissors className="w-6 h-6" /> },
    { title: 'Barba Ritual', desc: 'Afeitado clásico con toalla caliente y aceites esenciales. Una experiencia que revitaliza.', icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Decorative bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12vw] font-display font-black text-white/5 tracking-widest uppercase">BARBER</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3"
          >
            Lo que ofrecemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-white"
          >
            Servicios <span className="text-gold">Exclusivos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md mx-auto"
          >
            Excelencia en cada detalle para resaltar tu mejor versión.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 70, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-gold/30 transition-all group cursor-default"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gold transition-all duration-300 group/btn"
              >
                Reservar Ahora <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Gallery ──────────────────────────────────────────────────────────────────
const cuts = [
  "/images/corte1.png",
  "/images/corte2.png",
  "/images/corte3.png",
  "/images/corte4.png",
  "/images/corte5.png",
  "/images/corte6.png",
  "/images/corte7.png",
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3"
          >
            Nuestro trabajo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4"
          >
            El Arte del <span className="text-gold">Corte</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-500"
          >
            Inspiración y precisión en cada trabajo.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.93 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="rounded-2xl pb-10"
          >
            {cuts.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl relative group">
                  <img
                    src={img}
                    alt={`Corte ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white font-bold text-sm">Corte #{idx + 1}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Contact ──────────────────────────────────────────────────────────────────
const Contact = () => {
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        reset();
      } else {
        setStatus({ type: 'error', message: result.message });
      }
    } catch {
      setStatus({ type: 'error', message: 'Error al conectar con el servidor.' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: null, message: '' }), 5000);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest text-gold uppercase mb-3">Encuéntranos</span>
            <h2 className="text-4xl font-display font-bold mb-8">Visítanos en <span className="text-gold">Barbería David</span></h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: 'Ubicación', text: 'Guanare, Portuguesa, Venezuela — Barrio El Milagro, Callejón Marabata, detrás de Traki' },
                { icon: <Clock className="w-5 h-5" />, label: 'Horarios', text: 'Lun - Sáb: 9:00 AM - 8:00 PM · Dom: Cerrado' },
                { icon: <Phone className="w-5 h-5" />, label: 'Teléfono', text: '+58 426-2015664' },
              ].map(({ icon, label, text }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gold shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{label}</h4>
                    <p className="text-gray-500 text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-72 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <iframe
                src="https://maps.google.com/maps?q=3727%2BJ2C+Guanare+Portuguesa+Venezuela&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  placeholder="Ej. Juan Pérez"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    placeholder="juan@ejemplo.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    placeholder="300 123 4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-charcoal text-white py-4 rounded-xl font-bold hover:bg-gold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// ─── Home ─────────────────────────────────────────────────────────────────────
const Home = () => (
  <>
    <Helmet>
      <title>Barbería Ricardo David | Cortes y Barba en Guanare, Venezuela</title>
      <meta name="description" content="Barbería premium en Guanare, Portuguesa, Venezuela. Cortes de autor, barba ritual y atención personalizada. Barrio El Milagro, detrás de Traki." />
      <meta name="keywords" content="barbería guanare, corte de cabello guanare, barba guanare, barbería portuguesa venezuela, Ricardo David barbero" />
      <meta property="og:title" content="Barbería Ricardo David | Guanare, Venezuela" />
      <meta property="og:description" content="Cortes de autor y barba ritual en Guanare, Portuguesa. Estilo premium para el hombre moderno." />
      <meta property="og:type" content="local.business" />
      <meta property="og:image" content="/images/logo.png" />
      <link rel="canonical" href="https://barberiaricarddavid.com/" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HairSalon",
        "name": "Barbería Ricardo David",
        "description": "Barbería premium en Guanare, Portuguesa, Venezuela",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Barrio El Milagro, Callejón Marabata, detrás de Traki",
          "addressLocality": "Guanare",
          "addressRegion": "Portuguesa",
          "addressCountry": "VE",
          "postalCode": "3350"
        },
        "telephone": "+58-426-2015664",
        "openingHours": "Mo-Sa 09:00-20:00",
        "sameAs": ["https://www.tiktok.com/@farroportugues"]
      })}</script>
    </Helmet>
    <Hero />
    <Gallery />
    <Services />
    <Contact />
  </>
);

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="font-sans">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/corte" element={<ServicioCorte />} />
        <Route path="/servicios/barba" element={<ServicioBarba />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
      <FooterComponent />
      <WhatsAppButtonComponent />
      <CookieBanner />
    </div>
  );
}
