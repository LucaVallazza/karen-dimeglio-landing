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
    <section id="contact" className="py-24 bg-gradient-to-t from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-navy-50/30"></div>
      
      <div className="container mx-auto px-4 lg:px-40 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-navy-100 text-navy-800 text-sm font-medium rounded-full mb-3">
            Estamos para Ayudarte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Contacta con Nosotros</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Complete el siguiente formulario para programar una consulta o solicitar información sobre nuestros servicios legales.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto ">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-5">
              {/* Información de contacto */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-8 md:col-span-2 bg-gradient-to-br from-navy-700 to-navy-900 text-white"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                  <p className="mb-8 text-navy-100">
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
                        <p className="font-medium">Dirección Rosario Vera Peñaloza 450 y <br/> Olga Cosettini 1540</p>
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
                
                <div className="mt-12 pt-12 border-t border-navy-600/50">
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
                className="p-8 md:col-span-3"
              >
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Envíanos tu Consulta</h3>
                
                {formStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-green-800 mb-2">¡Mensaje Enviado!</h4>
                    <p className="text-green-700">
                      Gracias por contactarnos. Responderemos a tu consulta a la brevedad.
                    </p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="mt-4 bg-white text-green-700 border border-green-300 rounded-md px-4 py-2 font-medium hover:bg-green-50"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre completo <span className="text-red-500">*</span>
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
                          Email <span className="text-red-500">*</span>
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono
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
                          Asunto <span className="text-red-500">*</span>
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
                        Mensaje <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 resize-none"
                        placeholder="Describe brevemente tu situación..."
                      ></textarea>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      Al enviar este formulario, acepta nuestra política de privacidad y el tratamiento de sus datos para responder a su consulta.
                    </p>
                    
                    <div>
                      <motion.button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className={`w-full md:w-auto px-8 py-3 bg-navy-700 hover:bg-navy-800 text-white rounded-md font-medium flex items-center justify-center transition-colors ${
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
                        Ha ocurrido un error al enviar el formulario. Por favor, inténtelo nuevamente o contáctenos por teléfono.
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