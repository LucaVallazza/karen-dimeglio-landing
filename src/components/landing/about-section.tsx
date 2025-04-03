import { motion } from "framer-motion";
import { 
  MessageCircle, Award, 
  GraduationCap, ScrollText
} from "lucide-react";

export const AboutSection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Core values data
  const coreValues = [
    {
      title: "Compromiso y dedicación",
      description: "Responsabilidad total en cada caso para lograr los mejores resultados posibles.",
      icon: <Award className="w-8 h-8 text-navy-700" />
    },
    {
      title: "Trato directo con el cliente",
      description: "Comunicación constante y transparente durante todo el proceso legal.",
      icon: <MessageCircle className="w-8 h-8 text-navy-700" />
    },
    {
      title: "Escucha activa",
      description: "Atención personalizada para ofrecer soluciones efectivas según cada necesidad.",
      icon: <ScrollText className="w-8 h-8 text-navy-700" />
    }
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements - solo visibles en desktop */}
      <div className="hidden md:block absolute top-40 right-10 w-64 h-64 rounded-full bg-navy-50 opacity-70"></div>
      <div className="hidden md:block absolute bottom-40 left-10 w-48 h-48 rounded-full bg-navy-50 opacity-70"></div>
      
      <div className="container mx-auto px-4 lg:px-40 relative z-10">
        {/* Encabezado - más compacto en móvil */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-3 md:mb-5">
            Nuestro <span className="text-navy-700 relative inline-block">
              equipo
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                <path d="M0 3C50 1 150 1 200 3" stroke="oklch(var(--color-accent-500))" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg">
            Abogados especializados en derecho penal y laboral con formación UBA y compromiso de excelencia profesional.
          </p>
        </motion.div>
        
        {/* Sección de formación - simplificada en móvil */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-20"
        >
          <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md md:shadow-lg border border-gray-200">
            <div className="bg-gradient-to-r from-navy-600 to-navy-800 h-1.5 md:h-2"></div>
            <div className="p-4 md:p-8">
              <div className="flex flex-col gap-4 md:gap-8">
                <div className="text-center mb-2 md:mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">Formación y especialización</h3>
                  <div className="h-1 w-16 md:w-20 bg-navy-200 mx-auto"></div>
                </div>
                
                {/* Grid en columna única en móvil */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-navy-50/50 p-4 md:p-6 rounded-lg md:rounded-xl border border-navy-100">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="bg-white p-2 md:p-3 rounded-full text-navy-700 mr-3 md:mr-4 shadow-sm">
                        <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-navy-800">Formación universitaria</h4>
                    </div>
                    <div className="text-sm md:text-base ml-3 mb-2"><p>
                    Graduados de las siguientes instituciones
                      </p>
                      </div>
                    <ul className="space-y-2 md:space-y-3 pl-10 md:pl-14">
                      <li className="flex items-start">
                        <span className="bg-navy-200 h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base">Universidad de Buenos Aires (UBA)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-navy-200 h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base">Universidad Católica Argentina (UCA)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-navy-50/50 p-4 md:p-6 rounded-lg md:rounded-xl border border-navy-100">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="bg-white p-2 md:p-3 rounded-full text-navy-700 mr-3 md:mr-4 shadow-sm">
                        <Award className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-navy-800">Experiencia comprobada</h4>
                    </div>
                    <ul className="space-y-2 md:space-y-3 pl-10 md:pl-14">
                      <li className="flex items-start">
                        <span className="bg-navy-200 h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base">Especialistas en derecho penal y laboral</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-navy-200 h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-sm md:text-base">Casos de éxito comprobados</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-2 md:mt-4">
                  <p className="text-navy-700 font-medium text-sm md:text-base">Asesoramiento jurídico personalizado y orientado a resultados</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Título de valores - más compacto */}
        <div className="mb-6 md:mb-10 text-center">
          <motion.h3 
            className="text-xl md:text-3xl font-bold text-navy-900 mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Nuestros valores
          </motion.h3>
        </div>
        
        {/* Tarjetas de valores - más compactas en móvil */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm md:shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group"
            >
              <div className="h-1.5 md:h-2 bg-gradient-to-r from-navy-500 to-navy-700"></div>
              <div className="p-4 md:p-8">
                <div className="bg-navy-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-navy-200 transition-colors">
                  <div className="scale-75 md:scale-100">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-navy-800 mb-2 md:mb-4 text-center">{value.title}</h4>
                <p className="text-gray-600 text-sm md:text-base text-center">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA final - más compacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 md:mt-16 text-center"
        >
          <a 
            href="#services" 
            className="inline-flex items-center text-navy-700 hover:text-navy-800 font-medium group"
          >
            <span className="text-sm md:text-base">Descubre nuestros servicios</span>
            <svg 
              className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};