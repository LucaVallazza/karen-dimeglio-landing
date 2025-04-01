import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const HeroSection = ({ 
  scrollToContact 
}: { 
  scrollToContact: () => void 
}) => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Overlay para texto más legible */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/70 z-10"></div>
      
      {/* Imagen de fondo (mantenida como solicitaste) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ 
          backgroundImage: "url(images/hero.jpeg)",
          backgroundPosition: "center",
          filter: "brightness(0.8) contrast(1.6) saturate(0.5)"
        }}
      ></div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block bg-navy-100 text-navy-800 px-4 py-1 rounded-full text-sm font-medium tracking-wider mb-4">
              ESPECIALISTAS EN DERECHO PENAL Y LABORAL
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Abogados <span className="text-navy-700 relative">
              Penalistas
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.28C40.6667 2.12 158.8 -1.04 199 5.28" stroke="oklch(var(--color-accent-500))" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> y <span className="text-navy-700">
              Laboralistas
            </span>
          </motion.h1>
          
          <motion.div
            className="h-px w-24 bg-navy-300 mb-8 hidden md:block"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Defendiendo tus derechos con <span className="font-semibold">experiencia</span>, <span className="font-semibold">compromiso</span> y <span className="font-semibold">resultados probados</span>.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <motion.button 
              onClick={scrollToContact}
              className="bg-navy-700 hover:bg-navy-800 text-white px-7 py-4 rounded-md font-semibold text-lg transition-all shadow-md relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center">
                Consulta tu caso
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.a 
              href="#about"
              className="bg-white hover:bg-gray-50 text-navy-800 border border-navy-200 px-7 py-4 rounded-md font-semibold text-lg transition-all shadow-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Conócenos
            </motion.a>
          </motion.div>
          
          {/* Stats badges 
          
          <motion.div
            className="flex flex-wrap gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center">
              <div className="bg-navy-100 h-12 w-12 rounded-full flex items-center justify-center mr-3">
                <span className="text-navy-800 font-bold text-xl">15+</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Años de</p>
                <p className="text-navy-800 font-semibold">Experiencia</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-navy-100 h-12 w-12 rounded-full flex items-center justify-center mr-3">
                <span className="text-navy-800 font-bold text-xl">98%</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Casos</p>
                <p className="text-navy-800 font-semibold">Exitosos</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-navy-100 h-12 w-12 rounded-full flex items-center justify-center mr-3">
                <span className="text-navy-800 font-bold text-xl">500+</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Clientes</p>
                <p className="text-navy-800 font-semibold">Satisfechos</p>
              </div>
            </div>
          </motion.div>
          */}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-navy-700 text-sm font-medium mb-2">Descubre más</p>
          <div className="w-0.5 h-8 bg-navy-400 rounded-full">
            <motion.div
              className="w-full h-1/3 bg-navy-700 rounded-full"
              initial={{ y: 0 }}
              animate={{ y: 16 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "loop"
              }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};