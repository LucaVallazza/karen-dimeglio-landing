import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gavel, Briefcase, ShieldCheck, Clock, 
  BarChart, Scale, FileText, Heart,
  ChevronRight, ChevronLeft, ArrowRight
} from "lucide-react";

// ==================== SERVICES SECTION COMPONENT ====================
export const ServicesSection = ({ 
  scrollToContact 
}: { 
  scrollToContact: () => void;
}) => {
  // Estado para el carrusel en dispositivos móviles
  // const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Detectar dispositivos móviles
  useEffect(() => {
    // const checkIfMobile = () => {
    //   if(isMobile)
    //   setIsMobile(window.innerWidth < 768);
    // };
    
    // checkIfMobile();
    // window.addEventListener('resize', checkIfMobile);
    
    // return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Datos de servicios
  const services = [
    {
      title: "Derecho Penal",
      subtitle: "Defensa de sus derechos y libertades",
      icon: <Gavel className="h-6 w-6 text-navy-700" />,
      features: [
        { text: "Defensa en casos de delitos contra la propiedad", icon: <ShieldCheck className="h-5 w-5" /> },
        { text: "Representación en delitos económicos y tributarios", icon: <BarChart className="h-5 w-5" /> },
        { text: "Asistencia en procesos de excarcelación", icon: <Scale className="h-5 w-5" /> },
      ],
      description: "Brindamos asesoramiento y representación legal completa en materia penal, defendiendo sus derechos con estrategias eficaces basadas en nuestra amplia experiencia."
    },
    {
      title: "Derecho Laboral",
      subtitle: "Protección de derechos del trabajador",
      icon: <Briefcase className="h-6 w-6 text-navy-700" />,
      features: [
        { text: "Despidos injustificados y reclamos indemnizatorios", icon: <FileText className="h-5 w-5" /> },
        { text: "Accidentes de trabajo y enfermedades laborales", icon: <Clock className="h-5 w-5" /> },
        { text: "Conflictos gremiales y sindicales", icon: <Scale className="h-5 w-5" /> },
      ],
      description: "Defendemos los derechos de los trabajadores con un enfoque especializado, garantizando que reciban un trato justo y las compensaciones que les corresponden por ley."
    },
    {
      title: "Amparos de Salud",
      subtitle: "Defensa del derecho a la salud",
      icon: <Heart className="h-6 w-6 text-navy-700" />,
      features: [
        { text: "Medidas cautelares", icon: <Clock className="h-5 w-5" /> },
        { text: "Amparos contra ministerios de Salud, Obras Sociales y prepagas", icon: <ShieldCheck className="h-5 w-5" /> },
        { text: "Ejecuciones de sentencias", icon: <Gavel className="h-5 w-5" /> },
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
  const slidesPerView = screenSize === 'small' ? 1 : screenSize === 'medium' ? 2 : 3;
  const totalSlides = Math.ceil(services.length / slidesPerView);

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
    <section id="services" className="py-16 md:py-24 lg:px-40 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-navy-50/50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-50/50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-navy-100 text-navy-800 text-sm font-medium rounded-full mb-3">
              Servicios Legales Especializados
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
              Nuestros <span className="text-navy-700 relative inline-block">
                Servicios
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M0 3C50 1 150 1 200 3" stroke="oklch(var(--color-accent-500))" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Ofrecemos asistencia jurídica integral para proteger tus derechos y resolver tus problemas legales con eficacia y profesionalismo.
            </p>
          </motion.div>
        </div>
        
        {/* Vista escritorio - Grid normal */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <div className="relative p-6 md:p-8 pb-0">
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
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
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
        
        {/* Vista móvil - Carrusel */}
        <div className="lg:hidden mb-16 relative">
          <div 
            ref={carouselRef}
            className="carousel-container overflow-hidden" 
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
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <div className="relative p-6 pb-0">
                  <div className="flex items-center mb-6">
                    <div className="bg-navy-100 p-3 rounded-lg mr-4">
                      {services[activeIndex].icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">{services[activeIndex].title}</h3>
                      <p className="text-navy-600 text-sm mt-1">{services[activeIndex].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{services[activeIndex].description}</p>
                  <div className="space-y-3 mb-8">
                    {services[activeIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="bg-navy-50 p-2 rounded-md text-navy-700 mr-3 mt-0.5">
                          {feature.icon}
                        </div>
                        <p className="text-gray-700">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <button 
                    onClick={scrollToContact}
                    className="text-navy-700 hover:text-navy-800 font-medium flex items-center"
                  >
                    Consultar sobre este servicio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controles del carrusel */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={handlePrev} 
              className="bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-navy-50"
              aria-label="Anterior servicio"
            >
              <ChevronLeft className="h-5 w-5 text-navy-700" />
            </button>
            
            <div className="flex items-center space-x-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeIndex ? 'w-6 bg-navy-600' : 'w-2.5 bg-gray-300'
                  }`}
                  aria-label={`Ver servicio ${idx + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext} 
              className="bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-navy-50"
              aria-label="Siguiente servicio"
            >
              <ChevronRight className="h-5 w-5 text-navy-700" />
            </button>
          </div>
          
          {/* Indicador de swipe */}
          <div className="text-center mt-3">
            <p className="text-xs text-gray-500 flex items-center justify-center">
              <ChevronLeft className="h-3 w-3" />
              Desliza para ver más servicios
              <ChevronRight className="h-3 w-3" />
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-navy-700 to-navy-800 rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-10 md:py-8 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">¿Necesita asesoramiento legal?</h3>
                <p className="text-navy-100">Contáctenos para una evaluación profesional de su caso</p>
              </div>
              <motion.button
                onClick={scrollToContact}
                className="bg-white hover:bg-gray-100 text-navy-800 px-6 py-3 rounded-md font-medium shadow-md flex items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Consultar ahora
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};