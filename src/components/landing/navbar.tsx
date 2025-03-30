import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Navbar = ({ aboutRef, servicesRef, successRef, contactRef }) => {
    const [navbarBg, setNavbarBg] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    
    // Function to handle scrolling behavior and active section
    useEffect(() => {
      const handleScroll = () => {
        // Cambiar fondo de navbar
        if (window.scrollY > 10) {
          setNavbarBg(true);
        } else {
          setNavbarBg(false);
        }
        
        // Detectar sección activa
        const scrollPosition = window.scrollY + 100;
        
        if (scrollPosition < window.innerHeight) {
          setActiveSection("home");
        } else if (aboutRef.current && scrollPosition < aboutRef.current.offsetTop + aboutRef.current.offsetHeight) {
          setActiveSection("about");
        } else if (servicesRef.current && scrollPosition < servicesRef.current.offsetTop + servicesRef.current.offsetHeight) {
          setActiveSection("services");
        } else if (successRef.current && scrollPosition < successRef.current.offsetTop + successRef.current.offsetHeight) {
          setActiveSection("success");
        } else {
          setActiveSection("contact");
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [aboutRef, servicesRef, successRef, contactRef]);
    
    // Function to scroll to specific sections
    const scrollToSection = (ref: React.RefObject<HTMLElement>, section: string) => {
      setMobileMenuOpen(false);
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    return (
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          navbarBg 
            ? 'bg-gradient-to-r from-navy-900/98 to-navy-800/98 shadow-lg backdrop-blur-sm py-2' 
            : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo with enhanced styling */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold mr-3 relative shadow-md">
                  <span className="text-lg tracking-tighter">APL</span>
                </div>
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-tight">
                  Abogados <span className="text-blue-400">Penales</span> y <span className="text-blue-400">Laborales</span>
                </span>
              </div>
            </motion.div>
            
            {/* Desktop Menu - Enhanced with active indicators and refined interactions */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: "Inicio", section: "home", ref: null },
                { name: "Nosotros", section: "about", ref: aboutRef },
                { name: "Servicios", section: "services", ref: servicesRef },
                { name: "Casos de Éxito", section: "success", ref: successRef },
                { name: "Contacto", section: "contact", ref: contactRef }
              ].map((item) => (
                <motion.button 
                  key={item.section}
                  onClick={() => scrollToSection(item.ref, item.section)}
                  className={`relative px-4 py-2 text-white transition-all duration-300 rounded-md ${
                    activeSection === item.section 
                      ? 'font-medium text-blue-300' 
                      : 'hover:text-blue-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.section && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 mx-auto"
                      style={{ width: '50%' }}
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.button 
                  onClick={() => scrollToSection(contactRef, "contact")}
                  className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 ml-4 text-white px-5 py-2.5 rounded-md font-medium transition-all shadow-md relative overflow-hidden group"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center">
                    Consulta tu caso
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-blue-500 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </motion.div>
            </div>
            
            {/* Mobile Menu Button with enhanced animation */}
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none bg-blue-700/30 p-2 rounded-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu with enhanced styling and animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-gradient-to-b from-navy-800 to-navy-900 shadow-xl overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                {[
                  { name: "Inicio", section: "home", ref: null },
                  { name: "Nosotros", section: "about", ref: aboutRef },
                  { name: "Servicios", section: "services", ref: servicesRef },
                  { name: "Casos de Éxito", section: "success", ref: successRef },
                  { name: "Contacto", section: "contact", ref: contactRef }
                ].map((item, index) => (
                  <motion.button 
                    key={item.section}
                    onClick={() => scrollToSection(item.ref, item.section)}
                    className={`text-left w-full py-3 px-2 flex justify-between items-center rounded-md my-1 ${
                      activeSection === item.section 
                        ? 'bg-blue-700/20 text-white font-medium' 
                        : 'text-gray-300 hover:bg-blue-700/10 hover:text-white'
                    } transition-all`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <span>{item.name}</span>
                    {activeSection === item.section && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
                
                <motion.div 
                  className="mt-4 pt-4 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <motion.button 
                    onClick={() => scrollToSection(contactRef, "contact")}
                    className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 px-4 rounded-md w-full text-center font-medium shadow-md flex items-center justify-center"
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Consulta tu caso</span>
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  };