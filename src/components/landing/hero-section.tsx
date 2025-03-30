import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const HeroSection = ({ scrollToContact }: { scrollToContact: () => void }) => {
    const scrollToNext = () => {
      // Scroll suave a la siguiente sección (altura de la pantalla)
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    };
    
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fondo con efecto de profundidad y gradiente optimizado */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/95 to-navy-800/90 z-10"></div>
        
        {/* Imagen de fondo con mejor optimización visual */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')] bg-cover bg-fixed bg-center opacity-90 filter brightness-[0.4] contrast-[1.1]"></div>
        
        {/* Elementos gráficos decorativos */}
        <motion.div 
          className="absolute inset-0 z-10 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-10 right-[10%] w-80 h-80 rounded-full border-2 border-blue-400/40 transform rotate-45"></div>
          <div className="absolute bottom-20 left-[5%] w-60 h-60 rounded-full border-2 border-white/30"></div>
          <div className="absolute top-[40%] left-[20%] w-40 h-40 rounded-full border border-blue-300/40"></div>
        </motion.div>
        
        {/* Contenido principal con mejor distribución espacial */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Columna de texto con mejor jerarquía visual */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-2 md:mb-4"
              >
                <span className="inline-block bg-blue-700/20 text-blue-300 px-4 py-1 rounded-full text-sm font-medium tracking-wider mb-4">
                  ESPECIALISTAS EN DERECHO PENAL Y LABORAL
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Abogados <span className="text-blue-400">Penales</span> y <span className="text-blue-400">Laborales</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-px w-20 bg-blue-400 mb-6 hidden md:block"
              ></motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl"
              >
                Defendiendo tus derechos con experiencia, compromiso y resultados probados.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.button 
                  onClick={scrollToContact}
                  className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Consulta tu caso ahora</span>
                  <motion.span 
                    className="absolute inset-0 bg-blue-600 z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </motion.button>
                
                <motion.button
                  className="border border-white/30 hover:border-blue-400 text-white hover:text-blue-300 px-8 py-4 rounded-md font-medium text-lg transition-all flex items-center justify-center group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToNext}
                >
                  <span>Conoce más</span>
                  <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
            
            {/* Columna visual con elementos distintivos */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden md:flex justify-end"
            >
              <div className="relative w-full max-w-md aspect-square">
                {/* Elemento visual de escala de justicia estilizado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-4 border-blue-500/20 flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-700/30 to-blue-500/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                          <div className="font-bold text-5xl text-white mb-2">APL</div>
                          <div className="text-blue-300 text-sm tracking-wider">ESTUDIO JURÍDICO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Puntos decorativos flotantes con animación */}
                <motion.div 
                  className="absolute top-8 right-12 w-6 h-6 rounded-full bg-blue-500"
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                ></motion.div>
                
                <motion.div 
                  className="absolute bottom-20 left-12 w-4 h-4 rounded-full bg-blue-400"
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Indicador de scroll animado */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.5,
          }}
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-300 text-sm mb-2">Descubre más</span>
            <ChevronDown className="h-6 w-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </section>
    );
  };