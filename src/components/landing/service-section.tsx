import { motion } from "framer-motion";
import { 
  Gavel, Briefcase, ShieldCheck, Clock, 
  BarChart, Scale, AlertTriangle, FileText 
} from "lucide-react";

// ==================== SERVICES SECTION COMPONENT ====================
export const ServicesSection = ({ 
    forwardedRef, 
    scrollToContact 
  }:
  { 
    forwardedRef: React.RefObject<HTMLDivElement>;
    scrollToContact: () => void;
  }) => {
    const penalServices = [
      "Defensas penales y Querellas",
      "Denuncias",
      "Instrucción, juicio y ejecución  ",
      "Excarcelaciones",
      "Recursos de apelación",
      "Pedidos de libertad condicional",
      "Otros servicios relacionados"
    ];
  
    const laboralServices = [
      "Intercambio telegráfico",
      "SECLO",
      "Demandas laborales",
      "Audiencias",
      "Ejecución",
      "Medidas cautelares",
      "Reincorporaciones",
      "Acuerdos laborales"
    ];
  
    // Combined service features
    const serviceFeatures = [
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Asesoramiento integral",
        description: "Orientación completa durante todo el proceso legal"
      },
      {
        icon: <Clock className="h-5 w-5" />,
        title: "Atención 24 horas",
        description: "Disponibles para emergencias penales en cualquier momento"
      },
      {
        icon: <BarChart className="h-5 w-5" />,
        title: "Experiencia probada",
        description: "Casos exitosos en múltiples procesos judiciales"
      },
      {
        icon: <Scale className="h-5 w-5" />,
        title: "Enfoque personalizado",
        description: "Estrategia legal adaptada a las necesidades de cada cliente"
      }
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15
        }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      }
    };

    const featureVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
      }
    };
  
    return (
      <section ref={forwardedRef} className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-100/30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-100/30 translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-1/3 right-0 w-16 h-16 rounded-full bg-blue-200/30"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-3">
              Servicios Legales Especializados
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Áreas de <span className="text-blue-700 relative inline-block">
                Práctica
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                  <path d="M0 3C50 1 150 1 200 3" stroke="#2563EB" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Asesoramiento jurídico especializado en derecho penal y laboral, con un enfoque personalizado para cada caso
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Derecho Penal - Enhanced Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative p-6 md:p-8 pb-0">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-700 p-3 rounded-lg mr-4">
                    <Gavel className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Derecho Penal</h3>
                    <p className="text-blue-600 text-sm mt-1">Defensa de sus derechos y libertades</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Brindamos asesoramiento y representación legal en todos los aspectos del derecho penal, 
                  desde la denuncia hasta la ejecución de la pena.
                </p>

                
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-blue-700 mr-2" />
                  Servicios específicos:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {penalServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <motion.button 
                  onClick={scrollToContact}
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Consulta tu caso penal</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
            
            {/* Derecho Laboral - Enhanced Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative p-6 md:p-8 pb-0">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-700 p-3 rounded-lg mr-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Derecho Laboral</h3>
                    <p className="text-blue-600 text-sm mt-1">Protección de sus derechos laborales</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Ofrecemos asesoramiento legal especializado en materia laboral, protegiendo los derechos 
                  de los trabajadores en todas las etapas del proceso.
                </p>
                
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-blue-700 mr-2" />
                  Servicios específicos:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {laboralServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <motion.button 
                  onClick={scrollToContact}
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Consulta tu caso laboral</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Common Features Section */}
          <div className="mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-10"
            >
              Por qué elegir nuestros servicios legales
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-700">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Call to Action Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-10 md:py-8 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">¿Necesita asesoramiento legal?</h3>
                <p className="text-blue-100">Contáctenos para una evaluación profesional de su caso</p>
              </div>
              <motion.button 
                onClick={scrollToContact}
                className="bg-white text-blue-700 hover:text-blue-600 font-medium py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contactar ahora</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };