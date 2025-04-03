import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gavel, Briefcase, ShieldCheck, Clock, 
  Scale, FileText, Heart,
  ChevronRight, ChevronLeft, ArrowRight, Mail, Users,
  Handshake, FileEdit, Mic, ShieldAlert, TimerReset, Unlock, MoreHorizontal
} from "lucide-react";

// ==================== SERVICES SECTION COMPONENT ====================
export const ServicesSection = ({ 
  scrollToContact 
}: { 
  scrollToContact: () => void;
}) => {
  // Estado para el carrusel en dispositivos móviles
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Datos de servicios
  const services = [
    {
      title: "Derecho penal",
      subtitle: "Defensa de sus derechos y libertades",
      icon: <Gavel className="h-6 w-6 text-navy-700" />,
      features: [
        { text: "Defensas y querellas", icon: <ShieldCheck className="h-5 w-5" /> },
        { text: "Denuncias", icon: <FileText className="h-5 w-5" /> },
        { text: "Instrucción, juicio y ejecución", icon: <Scale className="h-5 w-5" /> },
        { text: "Excarcelaciones y morigeración de penas", icon: <Unlock className="h-5 w-5" /> },
        { text: "Recursos de apelación y casación", icon: <FileEdit className="h-5 w-5" /> },
        { text: "Pedidos de libertad condicional y asistida", icon: <TimerReset className="h-5 w-5" /> },
        { text: "Otros servicios relacionados", icon: <MoreHorizontal className="h-5 w-5" /> }
      ],
      description: "Brindamos asesoramiento y representación legal completa en materia penal, defendiendo sus derechos con estrategias eficaces basadas en nuestra amplia experiencia."
    },
    {
      title: "Derecho laboral",
      subtitle: "Protección de derechos del trabajador",
      icon: <Briefcase className="h-6 w-6 text-navy-700" />,
      features: [
        { text: "Intercambio telegráfico", icon: <Mail className="h-5 w-5" /> },
        { text: "SECLO", icon: <Users className="h-5 w-5" /> },
        { text: "Demandas y contestaciones", icon: <FileText className="h-5 w-5" /> },
        { text: "Audiencias y ejecución", icon: <Mic className="h-5 w-5" /> },
        { text: "Medidas cautelares y reincorporaciones", icon: <ShieldAlert className="h-5 w-5" /> },
        { text: "Acuerdos laborales", icon: <Handshake className="h-5 w-5" /> }
      ],
      description: "Defendemos los derechos de los trabajadores con un enfoque especializado, garantizando que reciban un trato justo y las compensaciones que les corresponden por ley."
    },
    {
      title: "Amparos de salud",
      subtitle: "Defensa del derecho a la salud",
      icon: <Heart className="h-6 w-6 text-navy-700" />,
      features: [
        { text: "Medidas cautelares", icon: <Clock className="h-5 w-5" /> },
        { text: "Amparos contra ministerios de Salud, Obras Sociales y prepagas", icon: <ShieldCheck className="h-5 w-5" /> },
        { text: "Ejecuciones de sentencias", icon: <Gavel className="h-5 w-5" /> }
      ],
      description: "Garantizamos el acceso a tratamientos y medicamentos necesarios mediante acciones legales efectivas contra entidades que niegan la cobertura adecuada de salud."
    }
  ];

  // Estado y funciones para manejar diferentes tamaños de pantalla
  const [screenSize, setScreenSize] = useState('small'); // 'small', 'medium', 'large'
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoplayDuration = 5000;

  // Cálculos dinámicos basados en el tamaño de pantalla
  // const slidesPerView = screenSize === 'small' ? 1 : screenSize === 'medium' ? 2 : 3;
  const totalSlides = services.length;

  // Detectar tamaño de pantalla
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('small');
      } else if (window.innerWidth < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };
    
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Autoplay con pausa al interactuar
  useEffect(() => {
    if (isPaused || screenSize === 'large') return;
    
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(prev => prev + (100 / (autoplayDuration / 100)));
      } else {
        setProgress(0);
        setActiveIndex(prev => (prev + 1) % totalSlides);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [isPaused, progress, totalSlides, screenSize]);

  // Navegación mejorada
  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  const handleNext = useCallback(() => {
    setProgress(0);
    setActiveIndex(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setProgress(0);
    setActiveIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Manejo avanzado de gestos táctiles
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext();
    } else if (touchEnd - touchStart > 100) {
      handlePrev();
    }
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section id="services" className="py-10 md:py-16 lg:py-24 lg:px-40 bg-gray-50 relative overflow-hidden">
      {/* Background elements - reducidos */}
      <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 rounded-full bg-navy-50/50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 md:w-80 h-48 md:h-80 rounded-full bg-navy-50/50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-3 md:mb-5">
              Nuestros <span className="text-navy-700 relative inline-block">
                Servicios
                <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 200 6" fill="none">
                  <path d="M0 3C50 1 150 1 200 3" stroke="oklch(var(--color-accent-500))" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-lg">
              Ofrecemos asistencia jurídica integral para proteger tus derechos y resolver tus problemas legales.
            </p>
          </motion.div>
        </div>
        
        {/* Vista escritorio - Sin cambios */}
        <div className="hidden xl:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
            >
              <div className="relative p-6 md:p-8 pb-0 flex-grow">
                <div className="flex items-center mb-6">
                  <div className="bg-navy-100 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy-900">{service.title}</h3>
                    <p className="text-navy-600 text-sm mt-1">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="bg-navy-50 p-2 rounded-md text-navy-700 mr-3 mt-0.5">
                        {feature.icon}
                      </div>
                      <p className="text-gray-700">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 mt-auto">
                <button 
                  onClick={scrollToContact}
                  className="text-navy-700 hover:text-navy-800 font-medium flex items-center"
                >
                  Consultar sobre este servicio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Vista móvil - Carrusel OPTIMIZADO */}
        <div className="xl:hidden mb-10 md:mb-16 relative">
          {/* Indicadores en la parte superior (más compactos) */}
          <div className="flex justify-center mb-3">
            <div className="flex items-center space-x-1.5">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'w-5 bg-navy-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Ver servicio ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Texto ayuda de swipe - más compacto */}
          <div className="text-center mb-3">
            <p className="text-xs text-gray-500 flex items-center justify-center">
              <ChevronLeft className="h-3 w-3" />
              Desliza
              <ChevronRight className="h-3 w-3" />
            </p>
          </div>
          
          {/* Contenedor del carrusel */}
          <div 
            ref={carouselRef}
            className="carousel-container overflow-hidden relative" 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
                style={{ minHeight: '430px' }} // Altura reducida para compactar
              >
                {/* Barra de navegación superior más compacta */}
                <div className="relative h-10 border-b border-gray-100">
                  <div className="absolute left-0 top-0 z-10">
                    <button 
                      onClick={handlePrev} 
                      className="h-10 px-3 flex items-center justify-center hover:bg-gray-50 border-r border-gray-100 transition-colors"
                      aria-label="Anterior servicio"
                    >
                      <ChevronLeft className="h-4 w-4 text-navy-700" />
                    </button>
                  </div>
                  
                  <div className="absolute right-0 top-0 z-10">
                    <button 
                      onClick={handleNext} 
                      className="h-10 px-3 flex items-center justify-center hover:bg-gray-50 border-l border-gray-100 transition-colors"
                      aria-label="Siguiente servicio"
                    >
                      <ChevronRight className="h-4 w-4 text-navy-700" />
                    </button>
                  </div>
                  
                  {/* Indicador de servicio más compacto */}
                  <div className="h-full flex items-center justify-center">
                    <p className="text-xs text-navy-600 font-medium">
                      {activeIndex + 1}/{services.length}
                    </p>
                  </div>
                </div>
                
                {/* Contenido principal compactado */}
                <div className="relative p-4 md:p-6 pb-0 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="bg-navy-100 p-2 rounded-lg mr-3">
                      {services[activeIndex].icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">{services[activeIndex].title}</h3>
                      <p className="text-navy-600 text-xs mt-0.5">{services[activeIndex].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{services[activeIndex].description}</p>
                  <div className="space-y-2 mb-4">
                    {services[activeIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="bg-navy-50 p-1.5 rounded-md text-navy-700 mr-2 mt-0.5">
                          <div className="h-4 w-4">
                            {feature.icon}
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm pt-0.5">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Footer de la tarjeta compactado */}
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 mt-auto">
                  <button 
                    onClick={scrollToContact}
                    className="text-navy-700 hover:text-navy-800 font-medium flex items-center text-sm"
                  >
                    Consultar sobre este servicio
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Call to Action más compacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-navy-700 to-navy-800 rounded-lg md:rounded-xl shadow-md overflow-hidden">
            <div className="px-4 py-6 md:py-8 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">¿Necesita asesoramiento legal?</h3>
                <p className="text-navy-100 text-sm">Contáctenos para evaluar su caso</p>
              </div>
              <motion.button
                onClick={scrollToContact}
                className="bg-white hover:bg-gray-100 text-navy-800 px-4 py-2 md:px-6 md:py-3 rounded-md font-medium shadow-md flex items-center text-sm md:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Consultar ahora
                <ChevronRight className="ml-1.5 h-4 w-4 md:h-5 md:w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};