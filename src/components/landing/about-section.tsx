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
      icon: <Award className="h-8 w-8 text-blue-400" />,
      title: "Compromiso y Dedicación",
      description: "Asumimos cada caso con total responsabilidad, trabajando con determinación para conseguir los mejores resultados posibles."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-400" />,
      title: "Trato Directo con el Cliente",
      description: "Mantenemos una comunicación constante y transparente, asegurando que estés informado en cada etapa del proceso legal."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Escucha Activa",
      description: "Prestamos especial atención a las necesidades y preocupaciones de cada cliente para ofrecer soluciones personalizadas y efectivas."
    }
  ];
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Subtle background elements */}
      <div className="hidden md:block absolute top-40 right-10 w-64 h-64 rounded-full bg-blue-900/10"></div>
      <div className="hidden md:block absolute bottom-40 left-10 w-48 h-48 rounded-full bg-blue-900/10"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Title with enhanced typography */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-900/20 text-blue-400 text-sm font-medium rounded-full mb-3">
            Estudio Jurídico Di Meglio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            Nuestro <span className="text-blue-400 relative inline-block">
              Equipo
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                <path d="M0 3C50 1 150 1 200 3" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Abogados especializados, comprometidos con su defensa legal
          </p>
        </motion.div>

        {/* Unified Team Card - Clean Modern Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 md:mb-20"
        >
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2"></div>
            
            <div className="p-6 md:p-8 lg:p-10">
              {/* Team Header */}
              <div className="flex flex-col items-center text-center mb-10">
                <div className="inline-flex bg-blue-900/30 p-4 rounded-full mb-5">
                  <GraduationCap className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
                  Profesionales de Excelencia
                </h3>
                <div className="w-16 h-1 bg-blue-600 mb-5"></div>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-6">
                  Somos un equipo de abogados egresados de la Universidad de Buenos Aires con amplia 
                  experiencia en derecho penal y laboral, comprometidos con la excelencia profesional.
                </p>
              </div>
                          
              {/* Credentials Bar */}
              <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/10 p-5 rounded-xl flex flex-col md:flex-row items-center justify-center md:justify-around gap-6">
                <div className="flex items-center">
                  <div className="bg-blue-900/40 p-3 rounded-full mr-4">
                    <ScrollText className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-100">Formación Universitaria</h5>
                    <p className="text-gray-300 text-sm">Graduados de la Universidad de Buenos Aires (UBA)</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-blue-900/40 hidden md:block"></div>
                <div className="flex items-center">
                  <div className="bg-blue-900/40 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-100">Experiencia Comprobada</h5>
                    <p className="text-gray-300 text-sm">Especialistas en derecho penal y laboral</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Core Values - Enhanced Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-10"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-900/20 text-blue-400 text-sm font-medium rounded-full mb-3">
              Nuestra Filosofía
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
              Valores que nos Definen
            </h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Principios que guían nuestra práctica profesional día a día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 group"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="p-6 md:p-8">
                  <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900/40 transition-colors">
                    {value.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-center text-gray-100 mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-300 text-center">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};