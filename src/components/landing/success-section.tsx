import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, CheckCircle, ChevronRight } from "lucide-react";

export const SuccessSection = () => {
  // Estado para controlar qué caso está expandido
  const [expandedCase, setExpandedCase] = useState<number | null>(0);
  
  // Variantes de animación
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Datos de casos de éxito (sin cambios)
  const successCases = [
    {
      title: "Indemnizaciones laborales.",
      summary: "Más de 100 indemnizaciones laborales conseguidas en el último año.",
      description: "Hemos representado a numerosos trabajadores en sus reclamos laborales, logrando resultados favorables en casos de indemnizaciones por despido, accidentes de trabajo y otros conflictos entre empleados y empleadores.",
      results: [
        "Indemnizaciones por despidos sin causa.",
        "Reconocimiento de relación laboral.",
        "Acuerdos laborales beneficiosos."
      ]
    },
    {
      title: "Excarcelaciones y sobreseimientos.",
      summary: "Excarcelaciones exitosas y sobreseimientos en causas penales.",
      description: "Nuestro equipo de abogados penalistas ha logrado que diversos clientes recuperen su libertad mediante excarcelaciones. Asimismo, hemos conseguido sobreseimientos y desvinculaciones en causas penales de distinta índole.",
      results: [
        "Excarcelaciones obtenidas en tiempo oportuno.",
        "Sobreseimientos en causas penales.",
        "Desvinculaciones de procesos judiciales."
      ]
    },
    {
      title: "Absoluciones en juicio.",
      summary: "Absoluciones obtenidas en diferentes procesos judiciales.",
      description: "Gracias a nuestra estrategia de defensa y dedicación en cada caso, hemos conseguido absoluciones en juicios penales, representando a nuestros clientes con el máximo compromiso en todas las etapas del proceso.",
      results: [
        "Absoluciones en juicio.",
        "Defensas exitosas."
      ]
    }
  ];
  
  const toggleExpand = (index: number) => {
    setExpandedCase(expandedCase === index ? null : index);
  };

  return (
    <section 
      id="success"
      className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >


      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10 md:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-3 md:mb-4">
            Casos de <span className="text-navy-700">éxito:</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
            Estos son algunos de los resultados que hemos conseguido para nuestros clientes. 
            Cada caso demuestra nuestro compromiso con la defensa efectiva de los derechos.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {successCases.map((item, index) => (
              <motion.div key={index} variants={itemAnimation}
                className={`border-b border-gray-200 ${index === successCases.length - 1 ? 'border-b-0' : ''}`}
              >
                <div 
                  className={`px-4 py-3 sm:px-6 sm:py-5 cursor-pointer transition-colors ${
                    expandedCase === index ? 'bg-navy-50/50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {expandedCase === index ? (
                        <div className="bg-navy-700 rounded-full p-1 mr-3 md:mr-4 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                      ) : (
                        <div className="bg-navy-100 rounded-full p-1 mr-3 md:mr-4 flex-shrink-0">
                          <Award className="w-4 h-4 md:w-5 md:h-5 text-navy-700" />
                        </div>
                      )}
                      <div>
                        <h3 className={`font-semibold text-sm md:text-base ${expandedCase === index ? 'text-navy-900' : 'text-gray-800'}`}>
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-0.5 line-clamp-1">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                    <div className={`ml-2 md:ml-4 transform transition-transform ${expandedCase === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 ${
                        expandedCase === index ? 'text-navy-700' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedCase === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1,
                        transition: { duration: 0.3 }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { duration: 0.3 }
                      }}
                      className="overflow-hidden bg-navy-50/30"
                    >
                      <div className="px-4 py-4 sm:px-6 sm:py-6 border-t border-gray-200">
                        <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                          {item.description}
                        </p>
                        
                        <div>
                          <h4 className="font-medium text-navy-800 mb-2 md:mb-3 text-sm md:text-base">Resultados:</h4>
                          <ul className="space-y-1.5 md:space-y-2">
                            {item.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-navy-600 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-sm md:text-base">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Banner inferior con eslogan - optimizado para móvil */}
          <motion.div
            className="mt-8 md:mt-12 bg-gradient-to-r from-navy-700 to-navy-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="px-4 py-5 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="mr-3 md:mr-5 bg-navy-600/40 p-2 md:p-2.5 rounded-full">
                  <Award className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-base md:text-lg">El compromiso legal que necesitas.</h4>
                  <p className="text-navy-100 text-xs md:text-sm">Contáctanos para evaluar tu caso.</p>
                </div>
              </div>
              <motion.a 
                href="#contact" 
                className="bg-white hover:bg-gray-100 text-navy-800 px-6 py-3 rounded-md font-medium shadow-md flex items-center justify-center text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Consulta ahora
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};