import { ChevronUp, MessageSquare } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icono de WhatsApp personalizado
const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5"
  >
    <path 
      d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9 16.124 19.0625 17.6242 17.5623C19.1245 16.0621 19.962 14.0377 19.962 11.928C19.962 9.81828 19.1245 7.79387 17.6242 6.29364L17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.28999C17.348 7.96236 17.8844 8.77282 18.238 9.6652C18.5915 10.5576 18.7551 11.5114 18.717 12.4684C18.6789 13.4254 18.4398 14.3655 18.0182 15.2286C17.5965 16.0916 17.0029 16.8559 16.278 17.476C15.0317 18.1866 13.5828 18.5744 12.11 18.59L12 18.53ZM15.51 13.7C15.3769 13.6342 14.3285 13.1186 14.2069 13.0756C14.0854 13.0326 13.9994 13.0111 13.9134 13.1443C13.8274 13.2775 13.4204 13.7501 13.3459 13.8361C13.2714 13.9221 13.1969 13.9329 13.0637 13.867C12.9306 13.8012 12.251 13.5754 11.4424 12.8545C10.8129 12.2929 10.3929 11.6013 10.3183 11.4682C10.2438 11.335 10.3106 11.2658 10.3746 11.2022C10.4321 11.1451 10.5011 11.0564 10.5649 10.9818C10.6286 10.9072 10.6501 10.8535 10.6931 10.7675C10.7361 10.6815 10.7146 10.6069 10.6824 10.5412C10.6501 10.4754 10.2329 9.42837 10.1251 9.16214C10.0209 8.90355 9.91465 8.93783 9.83577 8.93212C9.76123 8.92683 9.67524 8.92647 9.58927 8.92612C9.50329 8.92577 9.36027 8.95799 9.23871 9.09115C9.11715 9.22431 8.5586 9.73991 8.5586 10.7869C8.5586 11.8339 9.3312 12.8487 9.4272 12.9347C9.5232 13.0207 10.3876 14.3141 11.6703 14.781C12.9529 15.2479 12.9529 15.0329 13.2 15.0114C13.4471 14.9899 14.2962 14.5173 14.4039 14.2082C14.5117 13.8991 14.5117 13.6329 14.4794 13.5887C14.4472 13.5445 14.361 13.5118 14.2278 13.446L15.51 13.7Z" 
      fill="#25D366"
    />
  </svg>
);

export const HeroSection = ({ 
  scrollToContact 
}: { 
  scrollToContact: () => void 
}) => {
  // Estado para controlar la visibilidad del menú
  const [showMenu, setShowMenu] = useState(false);
  
  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    window.open("https://wa.me/5491112345678?text=Hola,%20necesito%20asesoramiento%20legal.", "_blank");
    setShowMenu(false);
  };
  
  // Función para ir al contacto y cerrar el menú
  const handleContactClick = () => {
    scrollToContact();
    setShowMenu(false);
  };
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo con filtro */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')]"
        style={{ 
          backgroundPosition: "center",
          filter: "brightness(1) contrast(0.8) saturate(0.7)"
        }}
      ></div>
      
      {/* Overlay para texto más legible */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-white/40 z-10"></div>
      
      {/* Formas geométricas superpuestas - Ahora con z-index mayor que el overlay */}
      <div className="absolute inset-0 z-15">
        {/* Triángulo grande superior derecho - extendido más allá del viewport */}
        <div className="absolute right-0 top-0 w-full h-full bg-navy-800 opacity-80"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 50% 100%)",
            transform: "translateX(30%)" // Movemos para que la punta quede fuera
          }}
        ></div>
        
        {/* Triángulo medio azul claro - extendido más allá del viewport */}
        <div className="absolute right-0 top-0 w-full h-full bg-navy-600 opacity-70"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 30% 100%)",
            transform: "translateX(40%)" // Movemos para que la punta quede fuera
          }}
        ></div>
        
        {/* Triángulo pequeño turquesa - extendido más allá del viewport */}
        <div className="absolute right-0 top-0 w-full h-full bg-navy-400 opacity-60"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 10% 100%)",
            transform: "translateX(50%)" // Movemos para que la punta quede fuera
          }}
        ></div>
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 lg:px-40 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block bg-navy-100 text-navy-800 px-4 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wider mb-4">
              ESPECIALISTAS EN DERECHO PENAL Y LABORAL.
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            ABOGADOS <span className="text-navy-700 relative">
              PENALISTAS
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.28C40.6667 2.12 158.8 -1.04 199 5.28" stroke="oklch(var(--color-accent-500))" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> Y <span className="text-navy-700">
              LABORALISTAS.
            </span>
          </motion.h1>
          
          <motion.div
            className="h-px w-24 bg-navy-300 mb-8 hidden md:block"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-900 mb-8 max-w-2xl font-medium drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Brindamos servicios profesionales en las ramas del derecho penal y laboral.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {/* Botón con menú desplegable */}
            <div className="relative">
              <motion.button 
                onClick={() => setShowMenu(!showMenu)}
                className="bg-gradient-to-r from-navy-700 to-navy-800 hover:from-navy-800 hover:to-navy-900 text-white px-7 py-4 rounded-md font-semibold text-lg transition-all shadow-lg relative group"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 75, 114, 0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center">
                  Consulta tu caso
                  <ChevronUp 
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`} 
                  />
                </span>
                
                {/* Efecto de resplandor en hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-navy-400/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              
              {/* Menú emergente mejorado */}
              <AnimatePresence>
                {showMenu && (
                  <>
                    {/* Overlay para capturar clics fuera */}
                    <motion.div 
                      className="fixed inset-0 z-30 bg-transparent" 
                      onClick={() => setShowMenu(false)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    ></motion.div>
                    
                    <motion.div 
                      className="absolute bottom-full left-0 mb-3 z-40 min-w-[280px]"
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30,
                        mass: 1
                      }}
                    >
                      {/* Contenido del menú */}
                      <div className="bg-white backdrop-blur-sm bg-opacity-95 rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                        <button
                          onClick={handleContactClick}
                          className="w-full px-6 py-4 flex items-center text-left hover:bg-gray-50 border-b border-gray-100"
                        >
                          <MessageSquare className="w-5 h-5 mr-3 text-navy-700" />
                          <div>
                            <p className="font-medium text-gray-900">Formulario de contacto.</p>
                            <p className="text-sm text-gray-500">Complete el formulario para una consulta detallada.</p>
                          </div>
                        </button>

                        <button
                          onClick={openWhatsApp}
                          className="w-full px-6 py-4 flex items-center text-left hover:bg-gray-50"
                        >
                          <WhatsAppIcon />
                          <div className="ml-3">
                            <p className="font-medium text-gray-900">WhatsApp directo.</p>
                            <p className="text-sm text-gray-500">Consulta rápida por mensaje.</p>
                          </div>
                        </button>
                      </div>
                      
                      {/* Flecha indicadora */}
                      <div className="absolute left-10 bottom-0 transform translate-y-full">
                        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                          <path d="M10 10L0 0H20L10 10Z" fill="white"/>
                          <path d="M10 10L0 0H20" stroke="#f1f1f1" strokeWidth="0.5"/>
                        </svg>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            
            {/* El botón "Nuestros Servicios" */}
            <motion.a 
              href="#services"
              className="bg-white hover:bg-gray-50 text-navy-800 border border-navy-200 px-7 py-4 rounded-md font-semibold text-lg transition-all shadow-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Nuestros servicios
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
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
          <p className="text-white font-medium mb-2 text-sm">Descubre más</p>
          <div className="w-0.5 h-8 bg-white/50 rounded-full">
            <motion.div
              className="w-full h-1/3 bg-white rounded-full"
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
      
      {/* Triángulo de transición que coincide con el fondo del AboutSection */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-24 z-20">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#eff9ff]"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 0 0)"
          }}
        ></div>
        
        {/* Pequeño triángulo azul para mantener coherencia con el diseño */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-navy-400/20"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 0 20%)"
          }}
        ></div>
      </div>
    </div>
  );
};