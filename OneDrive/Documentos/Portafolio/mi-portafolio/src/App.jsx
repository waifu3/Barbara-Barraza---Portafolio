import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortafolioBarbaraBarra = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-black pointer-events-none" />
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-900/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-900/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px] flex items-center justify-center shadow-lg shadow-purple-500/50">
    <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-200 flex items-center justify-center">
  <img 
    src={new URL('./assets/logo3.svg', import.meta.url).href}
    alt="Logo" 
    className="w-10 h-10 object-contain"
  />
</div>
  </div>
</motion.div>

            <div className="hidden md:flex gap-8">
              {['inicio', 'sobre-mi', 'proyectos', 'skills', 'contacto'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white capitalize text-sm font-medium transition-colors duration-300 hover:text-cyan-400"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.replace('-', ' ')}
                </motion.button>
              ))}
            </div>

            <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden pb-4 flex flex-col gap-4">
              {['inicio', 'sobre-mi', 'proyectos', 'skills', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-cyan-400 capitalize text-sm"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center z-10">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="flex justify-center mb-8">
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-[2px] shadow-2xl shadow-purple-500/50">
             <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-200 flex items-center justify-center">
  <img 
  src={new URL('./assets/logo3.svg', import.meta.url).href}
  alt="Logo" 
  className="w-full h-full object-contain p-4"
/>
</div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Bárbara Barraza
              </span>
            </h1>
            <div className="flex flex-col items-center gap-2 mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-300">Ingeniera Informática</h2>
              <p className="text-cyan-400 font-medium">Data & SAP Analyst</p>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Especializada en optimización de procesos, automatización y análisis de datos. Transformo desafíos complejos en soluciones innovadoras.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
              onClick={() => scrollToSection('proyectos')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg transition-all border border-purple-500/50"
            >
              Ver Proyectos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)" }}
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-3 bg-transparent rounded-lg font-semibold hover:bg-cyan-900/30 transition-all border border-cyan-500/50"
            >
              Contactame
            </motion.button>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-16">
            <p className="text-gray-500 text-sm mb-2">Desplázate para explorar</p>
            <div className="text-cyan-400 text-2xl">↓</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="relative min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto */}
            <motion.div {...fadeInUp} className="flex justify-center">
              <div className="relative w-80 h-96 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-[3px] shadow-2xl shadow-purple-500/50">
                <div className="w-full h-full rounded-lg bg-black overflow-hidden">
                  <img 
                    src={new URL('./assets/barbara.png', import.meta.url).href}
                    alt="Bárbara Barraza" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>Soy una ingeniera informática apasionada por la tecnología y la optimización de procesos. Mi experiencia se centra en análisis de datos, implementación de soluciones SAP y automatización de flujos de trabajo empresariales.</p>
              <p>Me destaca mi capacidad para entender problemas complejos y diseñar soluciones elegantes que generan impacto real en las organizaciones. Disfruto trabajar en equipo y compartir conocimiento con mis colegas.</p>

              <div className="space-y-6 pt-4">
                <div className="p-6 border border-purple-500/30 rounded-lg bg-purple-900/10">
                  <h3 className="text-purple-400 font-semibold mb-3">📊 Especialidades</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Análisis de Datos</li>
                    <li>✓ Optimización de Procesos SAP</li>
                    <li>✓ Automatización de Flujos</li>
                    <li>✓ Business Intelligence</li>
                  </ul>
                </div>

                <div className="p-6 border border-cyan-500/30 rounded-lg bg-cyan-900/10">
                  <h3 className="text-cyan-400 font-semibold mb-3">🎓 Formación</h3>
                  <p className="text-gray-300">Ingeniera Informática</p>
                  <p className="text-gray-400 text-sm">Titulación completada con distinción</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="relative min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Proyectos Destacados
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
            {/* Proyecto 1 */}
            <motion.div variants={fadeInUp} className="p-8 border border-purple-500/30 rounded-lg bg-black hover:border-purple-500/60 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">SPINTECH</h3>
                  <p className="text-gray-400 text-sm">Plataforma Educativa Inclusiva</p>
                </div>
                <span className="px-3 py-1 bg-purple-900/50 rounded-full text-purple-300 text-xs">Fullstack + BD</span>
              </div>
              <p className="text-gray-300 mb-6">
                Plataforma educativa con autenticación, gestión de cursos, recursos multimedia, certificados y accesibilidad para personas con discapacidades.
              </p>
              <div className="mb-6">
                <p className="text-gray-400 text-sm font-semibold mb-3">Stack: PHP, MySQL, JavaScript, HTML/CSS</p>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/waifu3/proyecto-spintech" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-600/40 transition-all text-sm">
                  📁 Ver Repositorio
                </a>
                <a href="https://github.com/waifu3/proyecto-spintech" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-600/40 transition-all text-sm">
                  💻 Código
                </a>
              </div>
            </motion.div>

            {/* Proyecto 2 */}
            <motion.div variants={fadeInUp} className="p-8 border border-cyan-500/30 rounded-lg bg-black hover:border-cyan-500/60 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">ELECTRO-SPEED STORE</h3>
                  <p className="text-gray-400 text-sm">Tienda E-commerce</p>
                </div>
                <span className="px-3 py-1 bg-cyan-900/50 rounded-full text-cyan-300 text-xs">Frontend + API</span>
              </div>
              <p className="text-gray-300 mb-6">
                Tienda online con integración Stripe, carrito dinámico, gestión de productos y procesamiento de transacciones en tiempo real.
              </p>
              <div className="mb-6">
                <p className="text-gray-400 text-sm font-semibold mb-3">Stack: JavaScript, Stripe API, HTML/CSS</p>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/waifu3/Electro-Speed-Store" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-600/40 transition-all text-sm">
                  📁 Ver Repositorio
                </a>
                <a href="https://github.com/waifu3/Electro-Speed-Store" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-600/40 transition-all text-sm">
                  💻 Código
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Habilidades & Tecnologías
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Frontend', skills: ['JavaScript', 'HTML/CSS', 'React', 'Tailwind CSS'], icon: '💻' },
              { title: 'Backend', skills: ['Python', 'Java', 'Node.js', 'REST APIs'], icon: '⚙️' },
              { title: 'Datos & Análisis', skills: ['SQL', 'SAP', 'Data Analysis', 'Business Intelligence'], icon: '📊' }
            ].map((category) => (
              <motion.div key={category.title} variants={fadeInUp} className="p-6 border border-purple-500/30 rounded-lg bg-purple-900/10 hover:bg-purple-900/20">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-12 p-8 border border-cyan-500/30 rounded-lg bg-cyan-900/10">
            <h3 className="text-2xl font-bold text-white mb-6">Competencias Blandas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Trabajo en Equipo', 'Comunicación', 'Resolución de Problemas', 'Liderazgo', 
                'Pensamiento Analítico', 'Adaptabilidad', 'Proactividad', 'Gestión de Proyectos'].map((skill) => (
                <div key={skill} className="p-3 bg-black rounded-lg border border-cyan-500/20 text-center text-gray-300 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="relative min-h-screen flex items-center py-20">
        <div className="max-w-4xl mx-auto px-4 w-full text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Hablemos
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
            <p className="text-gray-400 text-lg mt-6">
              ¿Tienes un proyecto o quieres colaborar? Me encantaría escuchar tu propuesta.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-4">
            <a href="mailto:barbarabarraza3@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold border border-purple-500/50 hover:shadow-lg">
              ✉️ Enviarme un Email
            </a>

            <div className="flex justify-center gap-6 pt-8">
              <a href="https://github.com/waifu3" className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-600/20 transition-all">
                💻
              </a>
              <a href="https://www.linkedin.com/in/barbara-barraza-cabrera-092772222" className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-600/20 transition-all">
                💼
              </a>
              <a href="mailto:barbarabarraza3@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full border border-pink-500/50 text-pink-400 hover:bg-pink-600/20 transition-all">
                ✉️
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mt-16 p-8 border border-cyan-500/30 rounded-lg bg-cyan-900/10">
            <p className="text-gray-300 mb-4">¿Necesitas mi CV?</p>
            <a 
  href="/cv-barbara.pdf" 
  download
  className="inline-block px-6 py-3 bg-cyan-600/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-600/40 transition-all font-semibold"
>
  📥 Descargar CV
</a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-purple-500/20 py-8 px-4 text-center text-gray-500 text-sm">
        <p>© 2026 Bárbara Barraza. Diseñado y desarrollado con ✨ React + Tailwind + Framer Motion.</p>
      </footer>
    </div>
  );
};

export default PortafolioBarbaraBarra;