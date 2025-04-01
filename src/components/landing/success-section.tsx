import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, CheckCircle } from "lucide-react";

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
  
  // Datos de casos de éxito (basados exactamente en la información proporcionada)
  const successCases = [
    {
      title: "Indemnizaciones Laborales",
      summary: "Más de 100 indemnizaciones laborales conseguidas en el último año.",
      description: "Hemos representado a numerosos trabajadores en sus reclamos laborales, logrando resultados favorables en casos de indemnizaciones por despido, accidentes de trabajo y otros conflictos entre empleados y empleadores.",
      results: [
        "Indemnizaciones por despidos sin causa",
        "Reconocimiento de relación laboral",
        "Acuerdos laborales beneficiosos"
      ]
    },
    {
      title: "Excarcelaciones y Sobreseimientos",
      summary: "Excarcelaciones exitosas y sobreseimientos en causas penales.",
      description: "Nuestro equipo de abogados penalistas ha logrado que diversos clientes recuperen su libertad mediante excarcelaciones. Asimismo, hemos conseguido sobreseimientos y desvinculaciones en causas penales de distinta índole.",
      results: [
        "Excarcelaciones obtenidas en tiempo oportuno",
        "Sobreseimientos en causas penales",
        "Desvinculaciones de procesos judiciales"
      ]
    },
    {
      title: "Absoluciones en Juicio",
      summary: "Absoluciones obtenidas en diferentes procesos judiciales.",
      description: "Gracias a nuestra estrategia de defensa y dedicación en cada caso, hemos conseguido absoluciones en juicios penales, representando a nuestros clientes con el máximo compromiso en todas las etapas del proceso.",
      results: [
        "Absoluciones en juicio",
        "Defensas exitosas"
      ]
    }
  ];
  
  const toggleExpand = (index: number) => {
    setExpandedCase(expandedCase === index ? null : index);
  };

  return (
    <section 
      id="success"
      className="py-24 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="hidden md:block absolute top-40 -right-20 w-96 h-96 rounded-full bg-navy-50/40"></div>
      <div className="hidden md:block absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-navy-50/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-navy-100 text-navy-800 text-sm font-medium rounded-full mb-3">
            Historial de Resultados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Casos de <span className="text-navy-700">Éxito</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Estos son algunos de los resultados que hemos conseguido para nuestros clientes. 
            Cada caso demuestra nuestro compromiso con la defensa efectiva de los derechos de nuestros representados.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
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
                  className={`px-6 py-5 sm:px-8 cursor-pointer transition-colors ${
                    expandedCase === index ? 'bg-navy-50/50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {expandedCase === index ? (
                        <div className="bg-navy-700 rounded-full p-1 mr-4">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="bg-navy-100 rounded-full p-1 mr-4">
                          <Award className="w-5 h-5 text-navy-700" />
                        </div>
                      )}
                      <div>
                        <h3 className={`font-semibold ${expandedCase === index ? 'text-navy-900' : 'text-gray-800'}`}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                    <div className={`ml-4 transform transition-transform ${expandedCase === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className={`w-5 h-5 ${
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
                      <div className="px-6 py-6 sm:px-8 border-t border-gray-200">
                        <p className="text-gray-700 mb-6">
                          {item.description}
                        </p>
                        
                        <div>
                          <h4 className="font-medium text-navy-800 mb-3">Tipos de resultados:</h4>
                          <ul className="space-y-2">
                            {item.results.map((result, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-navy-600 mr-3 flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
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
          
          {/* Banner inferior con eslogan de la empresa */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-navy-700 to-navy-800 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="px-6 py-6 md:py-8 md:px-10 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="mr-5 bg-navy-600/40 p-2.5 rounded-full">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">El compromiso legal que tu caso necesita</h4>
                  <p className="text-navy-100">Contáctanos para evaluar tu situación legal</p>
                </div>
              </div>
              <motion.a 
                href="#contact" 
                className="bg-white hover:bg-gray-100 text-navy-800 px-6 py-3 rounded-md font-medium shadow-md w-full md:w-auto text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Solicitar consulta
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};