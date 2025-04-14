import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronRight, Phone } from "lucide-react";
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
    <>
      <motion.nav 
        className={`fixed lg:px-40 top-0 left-0 w-full z-50 ${
          navbarBg 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/80' 
            : 'bg-transparent border-b border-transparent'
        } transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home" 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative group">
                <div className="h-12 w-14 p-1 md:h-14 md:w-16 rounded-xl bg-gradient-to-br from-navy-600 to-navy-900 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/icono.webp" 
                    alt="APL Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={`transition-all duration-300 ${navbarBg ? 'opacity-100' : 'opacity-0'}`}>
                {/* <h1 className="text-navy-900 font-bold text-lg md:text-xl">
                  Abogados <span className="text-navy-600">penalistas </span> y <span className="text-navy-600">laboralistas </span> 
                </h1>
                <p className="hidden xl:block text-sm text-navy-600/80">
                  Especialistas en derecho penal y laboral
                </p> */}
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <motion.a 
                  key={item.section}
                  href={item.href}
                  className={`relative px-2 py-1 text-sm transition-all duration-300 ${
                    activeSection === item.section 
                      ? 'text-navy-800 font-medium' 
                      : 'text-gray-600 hover:text-navy-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.section && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navy-600 rounded-full"
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              
              {/* Contact Button */}
              <motion.a 
                href="#contact"
                className="bg-gradient-to-r from-navy-600 to-navy-800 hover:from-navy-700 hover:to-navy-900 text-white px-5 py-2.5 rounded-lg font-medium shadow-md flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="hidden xl:block">
                    Consulta tu caso
                </span>
                <span className="block xl:hidden">
                    Consultanos
                </span>

                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`p-2 rounded-lg transition-all ${mobileMenuOpen ? 'bg-navy-100' : 'bg-gray-100'}`}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileMenuOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={mobileMenuOpen ? 'text-navy-700' : 'text-gray-700'}
                  >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-navy-900/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Quick Contact */}
                <div className="pb-6 border-b border-gray-100">
                  <a 
                    href="tel:541164586232"
                    className="flex items-center gap-3 text-navy-700 hover:text-navy-800 transition-colors"
                  >
                    <div className="p-2 bg-navy-50 rounded-lg">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Llámanos ahora</p>
                      <p className="text-xs text-gray-500">+54 11 6458-6232</p>
                    </div>
                  </a>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a 
                      key={item.section}
                      href={item.href}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-all ${
                        activeSection === item.section 
                          ? 'bg-navy-50 text-navy-800 font-medium' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {activeSection === item.section && (
                        <motion.div
                          className="h-1.5 w-1.5 rounded-full bg-navy-600"
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </motion.a>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-navy-600 to-navy-800 text-white p-4 rounded-lg font-medium shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Consulta tu caso
                  <ChevronRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};