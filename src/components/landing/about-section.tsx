import { motion } from "framer-motion";
import { 
  MessageCircle, Award, Users, 
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
      title: "Compromiso y Dedicación",
      description: "Asumimos cada caso con total responsabilidad, trabajando con determinación para conseguir los mejores resultados posibles.",
      icon: <Award className="w-8 h-8 text-navy-700" />
    },
    {
      title: "Trato Directo con el Cliente",
      description: "Mantenemos una comunicación constante y transparente, asegurando que estés informado en cada etapa del proceso legal.",
      icon: <MessageCircle className="w-8 h-8 text-navy-700" />
    },
    {
      title: "Escucha Activa",
      description: "Prestamos especial atención a las necesidades y preocupaciones de cada cliente para ofrecer soluciones personalizadas y efectivas.",
      icon: <ScrollText className="w-8 h-8 text-navy-700" />
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="hidden md:block absolute top-40 right-10 w-64 h-64 rounded-full bg-navy-50 opacity-70"></div>
      <div className="hidden md:block absolute bottom-40 left-10 w-48 h-48 rounded-full bg-navy-50 opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1.5 bg-navy-100 text-navy-800 text-sm font-medium rounded-full mb-3">
            Estudio Jurídico Di Meglio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-5">
            Nuestro <span className="text-navy-700 relative inline-block">
              Equipo
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                <path d="M0 3C50 1 150 1 200 3" stroke="oklch(var(--color-accent-500))" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Somos un equipo de abogados egresados de la Universidad de Buenos Aires con amplia experiencia en derecho penal y laboral, comprometidos con la excelencia profesional.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <div className="bg-gradient-to-r from-navy-600 to-navy-800 h-2"></div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-8">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Formación y Especialización</h3>
                  <div className="h-1 w-20 bg-navy-200 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-navy-50/50 p-6 rounded-xl border border-navy-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-white p-3 rounded-full text-navy-700 mr-4 shadow-sm">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold text-navy-800">Formación Universitaria</h4>
                    </div>
                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <span className="bg-navy-200 h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Graduados de la Universidad de Buenos Aires (UBA)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-navy-200 h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Graduados de la Universidad Católica Argentina (UCA)</span>
                      </li>
                    </ul>
                  </div>
                  


                  <div className="bg-navy-50/50 p-6 rounded-xl border border-navy-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-white p-3 rounded-full text-navy-700 mr-4 shadow-sm">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-semibold text-navy-800">Experiencia Comprobada</h4>
                    </div>
                    <ul className="space-y-3 pl-14">
                      <li className="flex items-start">
                        <span className="bg-navy-200 h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Especialistas en derecho penal y laboral</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-navy-200 h-1.5 w-1.5 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Casos de éxito comprobados</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-navy-700 font-medium">Brindamos asesoramiento jurídico integral con un enfoque personalizado y orientado a resultados</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mb-10 text-center">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-navy-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Nuestros valores
          </motion.h3>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group"
            >
              <div className="h-2 bg-gradient-to-r from-navy-500 to-navy-700"></div>
              <div className="p-6 md:p-8">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-navy-200 transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-navy-800 mb-4 text-center">{value.title}</h4>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a 
            href="#services" 
            className="inline-flex items-center text-navy-700 hover:text-navy-800 font-medium group"
          >
            <span>Descubre nuestros servicios</span>
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
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