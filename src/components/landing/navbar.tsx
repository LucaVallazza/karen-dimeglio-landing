import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    
    // Function to handle scrolling behavior and active section based on URL hash
    useEffect(() => {
      // Set initial active section based on hash
      const setInitialSection = () => {
        const hash = window.location.hash || "#home";
        setActiveSection(hash.substring(1));
      };
      
      const handleScroll = () => {
        // Change navbar background on scroll
        if (window.scrollY > 10) {
          setNavbarBg(true);
        } else {
          setNavbarBg(false);
        }
        
        // Detect active section based on position
        const sections = ["home", "about", "services", "success", "contact"];
        const scrollPosition = window.scrollY + 80; // Offset para navbar
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (!element) continue;
          
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      };

      // Handle hash change events
      const handleHashChange = () => {
        const hash = window.location.hash || "#home";
        setActiveSection(hash.substring(1));
      };
      
      setInitialSection();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('hashchange', handleHashChange);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('hashchange', handleHashChange);
      };
    }, [activeSection]);
    
    // Array of navigation items with href attributes
    const navItems = [
      { name: "Inicio", section: "home", href: "#home" },
      { name: "Nosotros", section: "about", href: "#about" },
      { name: "Servicios", section: "services", href: "#services" },
      { name: "Casos", section: "success", href: "#success" },
      { name: "Contacto", section: "contact", href: "#contact" }
    ];
    
    return (
      <motion.nav 
        className={`fixed lg:px-40 top-0 left-0 w-full z-50 transition-all duration-500 ${
          navbarBg 
            ? 'bg-white shadow-soft backdrop-blur-sm py-2 border-b border-gray-200' 
            : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo with enhanced styling */}
            <motion.a
              href="#home" 
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-navy-600 rounded-full blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-navy-600 to-navy-900 flex items-center justify-center text-white font-bold mr-3 relative shadow-md">
                  <span className="text-lg tracking-tighter">APL</span>
                </div>
              </div>
              <div>
                <span className="hidden text-navy-900 font-bold text-lg tracking-tight">
                  Abogados <span className="text-navy-700">Penalistas</span> y <span className="text-navy-700">Laboralistas</span>
                </span>
              </div>
            </motion.a>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.a 
                  key={item.section}
                  href={item.href}
                  className={`relative px-4 py-2 transition-all duration-300 rounded-md ${
                    activeSection === item.section 
                      ? 'font-medium text-navy-800' 
                      : 'text-gray-600 hover:text-navy-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.section && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy-600 mx-auto"
                      style={{ width: '50%' }}
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              
              {/* Botón Consulta tu caso - Corregido */}
              <motion.a 
                href="#contact"
                className="ml-4 bg-navy-700 hover:bg-navy-800 text-white px-5 py-2 rounded-md font-medium shadow-md flex items-center whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Consulta tu caso
                <ChevronRight className="w-4 h-4 ml-1" />
              </motion.a>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-navy-800 focus:outline-none bg-gray-100 p-2 rounded-md"
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
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-white shadow-soft overflow-hidden border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item, index) => (
                  <motion.a 
                    key={item.section}
                    href={item.href}
                    className={`text-left w-full py-3 px-2 flex justify-between items-center rounded-md my-1 ${
                      activeSection === item.section 
                        ? 'bg-navy-50 text-navy-800 font-medium' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-navy-700'
                    } transition-all`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {activeSection === item.section && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-navy-600" />
                      </motion.div>
                    )}
                  </motion.a>
                ))}
                
                <motion.div 
                  className="mt-4 pt-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <motion.a 
                    href="#contact"
                    className="bg-navy-700 hover:bg-navy-800 text-white py-3 px-4 rounded-md w-full text-center font-medium shadow-md flex items-center justify-center"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Consulta tu caso</span>
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
};