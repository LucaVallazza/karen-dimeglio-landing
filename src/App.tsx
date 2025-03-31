import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Navbar } from './components/landing/navbar';
import { HeroSection } from './components/landing/hero-section';
import { ServicesSection } from './components/landing/service-section';
import { AboutSection } from './components/landing/about-section';
import { SuccessSection } from './components/landing/success-section';

// Actualización de la paleta de colores para tema oscuro
export const colors = {
  primary: {
    light: 'bg-blue-500',
    default: 'bg-blue-600',
    dark: 'bg-blue-700',
    text: 'text-blue-500',
    textLight: 'text-blue-400',
    textHover: 'hover:text-blue-300',
    border: 'border-blue-600',
    borderLight: 'border-blue-500/20',
    hover: 'hover:bg-blue-500',
  },
  secondary: {
    light: 'bg-gray-800',
    default: 'bg-gray-850',
    dark: 'bg-gray-900',
    text: 'text-gray-300',
    textLight: 'text-gray-400',
    textDark: 'text-gray-100',
    border: 'border-gray-700',
  },
  dark: {
    light: 'bg-gray-800',
    default: 'bg-gray-900',
    dark: 'bg-gray-950',
    text: 'text-gray-100',
    accent: 'bg-gray-700',
    overlay: 'bg-gray-950/90',
  },
  white: {
    default: 'bg-gray-900',
    text: 'text-gray-100',
    hover: 'hover:text-white',
  },
  success: {
    light: 'bg-green-900/30',
    default: 'bg-green-600',
    dark: 'bg-green-700',
    text: 'text-green-400',
    border: 'border-green-800',
  }
};

// ==================== CONTACT SECTION COMPONENT ====================
const ContactSection = ({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section ref={forwardedRef} className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            Contactanos
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos listos para ayudarte. Contáctanos para una primera evaluación de tu caso sin costo.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-2/5 space-y-6"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-gray-100">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-700/50 p-3 rounded-full text-blue-300 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-100">Teléfonos</p>
                    <p className="text-gray-300">+54 11 1234-5678</p>
                    <p className="text-gray-300">+54 11 9876-5432</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-700/50 p-3 rounded-full text-blue-300 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-100">Dirección</p>
                    <p className="text-gray-300">Av. Corrientes 1234, 4to piso</p>
                    <p className="text-gray-300">CABA, Argentina</p>
                    <p className="text-gray-400 mt-1">Oficinas cómodas y seguras en pleno centro.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-700/50 p-3 rounded-full text-blue-300 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-100">Horarios de atención</p>
                    <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-300">Sábados: Con cita previa</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-gray-100">Envianos tu consulta</h3>
              
              {isSubmitted ? (
                <div className="bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-lg">
                  <p className="font-medium">¡Gracias por contactarnos!</p>
                  <p>Nos pondremos en contacto contigo a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Motivo de consulta *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-md flex justify-center items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar consulta"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Abogados Penales y Laborales</h3>
            <p className="mt-2 text-gray-400">Defendiendo tus derechos, con experiencia y compromiso.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-gray-500">&copy; {currentYear} APL. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==================== MAIN APP COMPONENT ====================
function App() {
  // Refs for scrolling to sections
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to contact section
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-100 bg-gray-900">
      {/* Pasar referencias como props al Navbar */}
      <Navbar 
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        successRef={successRef}
        contactRef={contactRef}
      />
      <main>
        {/* Agregar IDs a cada sección */}
        <section id="home">
          <HeroSection scrollToContact={scrollToContact} />
        </section>
        <section id="about">
          <AboutSection forwardedRef={aboutRef} />
        </section>
        <section id="services">
          <ServicesSection forwardedRef={servicesRef} scrollToContact={scrollToContact} />
        </section>
        <section id="success">
          <SuccessSection forwardedRef={successRef} />
        </section>
        <section id="contact">
          <ContactSection forwardedRef={contactRef} />
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;