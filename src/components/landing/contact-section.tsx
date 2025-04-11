import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";

export const ContactSection = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  // Manejo de cambios en los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    window.open("https://wa.me/5491112345678?text=Hola,%20necesito%20asesoramiento%20legal.", "_blank");
  };
  
  // Envío del formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulación de envío (reemplazar con API real)
    try {
      // Simular tiempo de procesamiento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aquí irían las llamadas a APIs reales para enviar el formulario
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-t from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-navy-50/30"></div>
      
      {/* Botón flotante de WhatsApp */}
      <motion.button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 shadow-lg rounded-full w-14 h-14 flex items-center justify-center text-white lg:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.button>
      
      <div className="container mx-auto px-4 lg:px-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-navy-100 text-navy-800 text-sm font-medium rounded-full mb-3">
            Estamos para Ayudarte.
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Contacta con nosotros:</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Complete el formulario para consultar sobre nuestros servicios legales.
          </p>
        </motion.div>
        
        {/* WhatsApp CTA para pantallas más grandes (escondido en móvil) */}
        <motion.div 
          className="hidden md:flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={openWhatsApp}
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium shadow-md transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consulta rápida por WhatsApp.
          </button>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-5">
              {/* Información de contacto */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-5 md:p-8 md:col-span-2 bg-gradient-to-br from-navy-700 to-navy-900 text-white"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Información de contacto.</h3>
                  
                  {/* Versión móvil de la información de contacto - mejorada con UI avanzada */}
                  <div className="md:hidden mb-6 space-y-4">
                    {/* Teléfono */}
                    <div className="space-y-2">
                      <a href="tel:+541112345678" className="flex items-center justify-center bg-navy-600/40 hover:bg-navy-600/50 active:bg-navy-600/60 p-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 border border-navy-500/30">
                        <Phone className="h-5 w-5 mr-3" strokeWidth={2.2} />
                        <span className="text-sm font-semibold">Llamar</span>
                      </a>
                      
                      {/* Texto indicativo añadido */}
                      <p className="text-xs text-navy-200 text-center -mb-1">o copia nuestro número:</p>
                      
                      <div className="flex justify-center mt-1">
                        <div className="bg-navy-800/30 border border-white/10 shadow-inner px-5 py-2 rounded-lg text-white text-center flex items-center">
                          <span className="text-sm font-medium">+54 11 1234-5678</span>
                          <button className="ml-2 opacity-70 hover:opacity-100 p-1 rounded-full hover:bg-white/10 transition-all" 
                            onClick={() => {navigator.clipboard.writeText('+541112345678'); alert('Número copiado al portapapeles');}}
                            aria-label="Copiar número">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2">
                      <a href="mailto:contacto@abogadospenalylaboral.com" className="flex items-center justify-center bg-navy-600/40 hover:bg-navy-600/50 active:bg-navy-600/60 p-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 border border-navy-500/30">
                        <Mail className="h-5 w-5 mr-3" strokeWidth={2.2} />
                        <span className="text-sm font-semibold">Email</span>
                      </a>
                      
                      {/* Texto indicativo añadido */}
                      <p className="text-xs text-navy-200 text-center -mb-1">o copia nuestra dirección:</p>
                      
                      <div className="flex justify-center mt-1">
                        <div className="bg-navy-800/30 border border-white/10 shadow-inner px-5 py-2 rounded-lg text-white text-center flex items-center">
                          <span className="text-sm font-medium truncate max-w-[180px]">contacto@abogadospenalylaboral.com</span>
                          <button className="ml-2 opacity-70 hover:opacity-100 p-1 rounded-full hover:bg-white/10 transition-all" 
                            onClick={() => {navigator.clipboard.writeText('contacto@abogadospenalylaboral.com'); alert('Email copiado al portapapeles');}}
                            aria-label="Copiar email">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* WhatsApp ocupando todo el ancho */}
                    <button 
                      onClick={openWhatsApp} 
                      className="flex items-center justify-center bg-green-600/60 hover:bg-green-600/70 active:bg-green-600/80 p-3.5 rounded-lg shadow-md hover:shadow-lg border border-green-500/30 transition-all duration-200 w-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="mr-3">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span className="text-base font-semibold">Consulta por WhatsApp</span>
                    </button>
                  </div>
                  
                  {/* Versión desktop completa - se oculta en móvil */}
                  <div className="hidden md:block">
                    <p className="mb-6 text-navy-100">
                      Estamos disponibles para responder a sus consultas y programar citas para discutir su situación legal.
                    </p>
                    
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <div className="bg-navy-600/50 p-2 rounded-full mr-4 mt-1">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-navy-100 mb-1">Teléfono</p>
                          <p className="font-medium">+54 11 1234-5678</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-navy-600/50 p-2 rounded-full mr-4 mt-1">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-navy-100 mb-1">Email</p>
                          <p className="font-medium">contacto@abogadospenalylaboral.com</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-navy-600/50 p-2 rounded-full mr-4 mt-1">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-navy-100 mb-1">Dirección</p>
                          <p className="font-medium">Rosario Vera Peñaloza 450 y <br/> Olga Cosettini 1540</p>
                          <p>Ciudad Autónoma de Buenos Aires, Argentina</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start">
                        <div className="bg-navy-600/50 p-2 rounded-full mr-4 mt-1">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-navy-100 mb-1">Horario de Atención</p>
                          <p className="font-medium">Lunes a Viernes: 9:00 - 18:00</p>
                          <p>Con cita previa</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="hidden md:block mt-12 pt-8 border-t border-navy-600/50">
                  <p className="text-xl font-medium mb-2">Abogados Penales y Laborales</p>
                  <p className="text-navy-100 italic">
                    "El compromiso legal que tu caso necesita."
                  </p>
                </div>
              </motion.div>
              
              {/* Formulario de contacto */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-5 md:p-8 md:col-span-3"
              >
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-5">Envianos tu consulta.</h3>
                
                {formStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-green-800 mb-2">¡Mensaje Enviado!.</h4>
                    <p className="text-green-700">
                      Gracias por contactarnos. Responderemos a la brevedad.
                    </p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="mt-4 bg-white text-green-700 border border-green-300 rounded-md px-4 py-2 font-medium hover:bg-green-50"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre. <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                          placeholder="Tu nombre"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email. <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono.
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                          placeholder="+54 11 1234-5678"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Asunto. <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                        >
                          <option value="" disabled>Seleccione un asunto</option>
                          <option value="Consulta Derecho Penal">Consulta Derecho Penal</option>
                          <option value="Consulta Derecho Laboral">Consulta Derecho Laboral</option>
                          <option value="Amparo de Salud">Amparo de Salud</option>
                          <option value="Otro">Otro</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje. <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 resize-none"
                        placeholder="Describe brevemente tu situación..."
                      ></textarea>
                    </div>
          
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center pt-2">
                      {/* Botón de WhatsApp para móviles */}

                      
                      {/* Botón de enviar formulario */}
                      <motion.button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className={`w-full sm:w-auto px-6 py-3 bg-navy-700 hover:bg-navy-800 text-white rounded-md font-medium flex items-center justify-center transition-colors ${
                          formStatus === "submitting" ? "opacity-80 cursor-not-allowed" : ""
                        }`}
                        whileHover={{ scale: formStatus !== "submitting" ? 1.02 : 1 }}
                        whileTap={{ scale: formStatus !== "submitting" ? 0.98 : 1 }}
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar consulta <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </motion.button>
                    </div>
                    
                    {formStatus === "error" && (
                      <div className="bg-red-50 text-red-700 p-3 rounded-md mt-2 text-sm">
                        Ha ocurrido un error. Por favor, inténtelo nuevamente o contáctenos por WhatsApp.
                      </div>
                    )}
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};