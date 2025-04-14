<motion.div 
  className="fixed inset-0 z-50 lg:hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-navy-900/20 backdrop-blur-sm" onClick={onClose}></div>
  
  {/* Menu content */}
  <motion.div 
    className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl"
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", damping: 30, stiffness: 300 }}
  >
    {/* Contact Info Section */}
    <div className="space-y-6 p-6 border-b border-gray-100">
      {/* Phone */}
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-navy-700 mr-3" />
            <span className="font-medium">+54 11 6458-6232</span>
          </div>
          <button 
            className="p-2 text-navy-600 hover:text-navy-800 rounded-full hover:bg-gray-100"
            onClick={() => {
              navigator.clipboard.writeText('541164586232');
              alert('Número copiado al portapapeles');
            }}
            aria-label="Copiar número"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <motion.a 
          href="tel:541164586232"
          className="flex items-center justify-center text-navy-600 hover:text-navy-800 font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          o toca acá para llamar
          <ChevronRight className="ml-2 h-4 w-4" />
        </motion.a>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-navy-700 mr-3" />
            <span className="font-medium truncate">aplestudiojuridico@gmail.com</span>
          </div>
          <button 
            className="p-2 text-navy-600 hover:text-navy-800 rounded-full hover:bg-gray-100"
            onClick={() => {
              navigator.clipboard.writeText('aplestudiojuridico@gmail.com');
              alert('Email copiado al portapapeles');
            }}
            aria-label="Copiar email"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <motion.a 
          href="mailto:aplestudiojuridico@gmail.com"
          className="flex items-center justify-center text-navy-600 hover:text-navy-800 font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          o toca acá para enviar email
          <ChevronRight className="ml-2 h-4 w-4" />
        </motion.a>
      </div>

      {/* WhatsApp */}
      <button 
        onClick={openWhatsApp}
        className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-medium shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
        Consultar por WhatsApp
      </button>
    </div>

    {/* Navigation Links */}
    <nav className="p-6">
      // ...existing code for navigation links...
    </nav>
  </motion.div>
</motion.div>