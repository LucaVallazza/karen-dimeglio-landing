import { motion } from "framer-motion";
import { 
  Award, ChevronRight, ChevronDown, Star
} from "lucide-react";
import { useState } from "react";

export const SuccessSection = ({ forwardedRef }: { forwardedRef: React.RefObject<HTMLDivElement> }) => {
  // Estado para controlar qué caso está expandido
  const [expandedCase, setExpandedCase] = useState<number | null>(0); // El primer caso expandido por defecto
  
  // Success cases con estrellas como iconos en todos los elementos
  const successCases = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Indemnizaciones Laborales",
      description: "Más de 100 indemnizaciones laborales conseguidas en el último año. Compensaciones justas por despidos, accidentes laborales y otros conflictos en el ámbito del trabajo.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excarcelaciones",
      description: "Excarcelaciones exitosas. Liberación de personas detenidas o en prisión preventiva mediante recursos legales efectivos y argumentos sólidos.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Sobreseimientos",
      description: "Sobreseimientos y desvinculaciones en causas penales. Resoluciones que finalizan el proceso penal sin condena por insuficiencia de pruebas o demostración de inocencia.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Absoluciones",
      description: "Absoluciones obtenidas en juicio. Sentencias favorables que declaran la inocencia del acusado tras un proceso judicial completo.",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Función para manejar el clic en un caso
  const toggleCase = (index: number) => {
    setExpandedCase(expandedCase === index ? null : index);
  };

  return (
    <section 
      ref={forwardedRef} 
      className="py-24 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI2YwZjdmZiIvPjwvZz48L3N2Zz4=')] opacity-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Professional header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-3">
            <div className="h-[1px] w-16 bg-blue-700 self-center"></div>
            <span className="px-4 text-blue-700 text-sm font-medium uppercase tracking-wider">
              Casos de Éxito
            </span>
            <div className="h-[1px] w-16 bg-blue-700 self-center"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Nuestros <span className="text-blue-700">resultados</span>
          </h2>
          
          <p className="text-gray-600 text-lg mx-auto leading-relaxed text-center">
            Nuestro compromiso con la excelencia se refleja en los resultados que hemos logrado para nuestros clientes.
          </p>
        </motion.div>
        
        {/* Collapsible accordion list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            {successCases.map((item, index) => (
              <motion.div 
                key={index}
                variants={item}
                className={`border-b border-gray-100 ${index === successCases.length - 1 ? 'border-b-0' : ''}`}
              >
                {/* Accordion header */}
                <button 
                  onClick={() => toggleCase(index)}
                  className={`w-full px-6 py-5 flex items-center justify-between transition-all duration-200 ${expandedCase === index ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg ${expandedCase === index ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                      {/* Estrella como icono principal */}
                      <Star className="w-6 h-6" fill={expandedCase === index ? "white" : "#2563eb"} />
                    </div>
                    <div className="flex items-center gap-2 text-left">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      {/* Se eliminó la estrella amarilla adicional */}
                    </div>
                  </div>
                  <div className="flex items-center">
                    {/* Se eliminaron los tags con las estadísticas */}
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${expandedCase === index ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                {/* Accordion content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedCase === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-white">
                    <div className="pl-12 border-l-2 border-blue-100">
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Professional CTA section - Versión más compacta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg overflow-hidden shadow-xl"
        >
          <div className="px-6 py-8 md:py-10 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="mr-5 bg-blue-700/40 p-2.5 rounded-full">
                <Award className="w-8 h-8 text-white/90" />
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Experiencia legal comprobada a su servicio
                </h3>
                <p className="text-blue-100 text-sm md:text-base mt-1">
                  Contáctenos para discutir cómo podemos ayudarle con su caso
                </p>
              </div>
            </div>
            
            <button className="inline-flex items-center px-5 py-2.5 bg-white text-blue-800 rounded-md text-base font-medium shadow-lg hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap">
              Solicitar consulta
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};