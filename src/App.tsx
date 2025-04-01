import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Navbar } from './components/landing/navbar';
import { HeroSection } from './components/landing/hero-section';
import { ServicesSection } from './components/landing/service-section';
import { AboutSection } from './components/landing/about-section';
import { SuccessSection } from './components/landing/success-section';
import { ContactSection } from './components/landing/contact-section';


// ==================== CONTACT SECTION COMPONENT ====================


// ==================== WHATSAPP BUTTON COMPONENT ====================
const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5491112345678?text=Hola,%20me%20gustaría%20realizar%20una%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contáctanos por WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </motion.a>
  );
};

// ==================== FOOTER COMPONENT ====================
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Abogados Penales y Laborales</h3>
            <p className="mt-2 text-navy-200">Defendiendo tus derechos, con experiencia y compromiso.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-navy-300 hover:text-white transition duration-300">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-navy-300 hover:text-white transition duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-navy-300">&copy; {currentYear} APL. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==================== MAIN APP COMPONENT ====================
function App() {
  // Redefinir scrollToContact para usar anclas
  const scrollToContact = () => {
    window.location.href = "#contact";
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection scrollToContact={scrollToContact} />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection scrollToContact={scrollToContact} />
        </section>
        <section id="success">
          <SuccessSection />
        </section>
        <ContactSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;