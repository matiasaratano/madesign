
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { GradientText } from "@/components/ui/gradient-text";
import { TallyButton } from "@/components/ui/TallyButton";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Text } from "recharts";

const Contacto = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-black text-white py-28">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <Text>Contacto</Text>
            </h1>
            <p className="text-xl max-w-3xl">
              ¿Tienes un proyecto en mente? Nos encantaría escucharte y ayudarte a hacerlo realidad.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">¿Cómo podemos ayudarte?</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  Rellena nuestro formulario de contacto para discutir tu proyecto y obtener un presupuesto personalizado.
                </p>
                <div className="flex justify-center">
                  <TallyButton text="Rellenar formulario" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90" />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  Estamos disponibles para ayudarte con cualquier pregunta o consulta que tengas.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">madesign.vg@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-gray-600 dark:text-gray-300">+54 11 24027007</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h3 className="font-medium">Ubicación</h3>
                      <p className="text-gray-600 dark:text-gray-300">Villa Gesell, Argentina</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Horario</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-medium">Lunes - Viernes:</span> 9:00 - 18:00
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Fines de semana:</span> Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
