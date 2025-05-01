
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { GradientText } from "@/components/ui/gradient-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ModernButton } from "@/components/ui/ModernButton";
import { TallyButton } from "@/components/ui/TallyButton";
import { Link } from "react-router-dom";
import { Text } from "recharts";
import { Code, Layout, Database, PencilRuler, Search, LineChart, ShieldCheck, Globe } from "lucide-react";

const Servicios = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos tu sitio a medida, rápido, claro y pensado para que funcione bien en todos lados.",
      icon: <Code size={24} className="text-primary" />,
    },
    {
      title: "UI/UX Design",
      description: "Diseñamos interfaces simples, lindas y fáciles de usar, para que tu público se sienta cómodo.",
      icon: <PencilRuler size={24} className="text-primary" />,
    },
    {
      title: "Desarrollo Frontend",
      description: "Damos vida a los diseños con tecnología moderna, para que todo se vea y funcione perfecto.",
      icon: <Layout size={24} className="text-primary" />,
    },
    {
      title: "Desarrollo Backend",
      description: "Nos encargamos de que todo funcione bien por detrás: datos, seguridad y rendimiento.",
      icon: <Database size={24} className="text-primary" />,
    },
    {
      title: "SEO & Marketing Digital",
      description: "Mejoramos tu visibilidad en Google y te ayudamos a llegar a más personas en el mundo digital.",
      icon: <Search size={24} className="text-primary" />,
    }
    
    
  ];

  const faqs = [
    {
      question: "¿Cuál es el proceso de desarrollo de un proyecto?",
      answer: "Nuestro proceso incluye: 1) Definición de requisitos y objetivos, 2) Diseño UI/UX, 3) Desarrollo y programación, 4) Pruebas y control de calidad, 5) Implementación y lanzamiento, 6) Mantenimiento y soporte posterior."
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "El tiempo varía según la complejidad del proyecto. Una landing page puede estar lista en 1 semana, mientras que proyectos más complejos como e-commerce o plataformas personalizadas pueden llevar 2-4 meses."
    },
    {
      question: "¿Qué tecnologías utilizan para el desarrollo?",
      answer: "Trabajamos con tecnologías modernas y eficientes como React, Next.js, Vue.js, Node.js, MongoDB, PostgreSQL, entre otras. Seleccionamos la stack tecnológica más adecuada para cada proyecto según sus necesidades específicas."
    },
    {
      question: "¿Ofrecen servicios de mantenimiento después del lanzamiento?",
      answer: "Sí, ofrecemos planes de mantenimiento que incluyen copias de seguridad, correcciones de errores y mejoras continuas para garantizar que tu sitio web siga funcionando de manera óptima."
    },
    {
      question: "¿Cómo manejan el SEO y la optimización para motores de búsqueda?",
      answer: "Implementamos buenas prácticas de SEO desde la fase de desarrollo, incluyendo optimización de velocidad, estructura semántica, responsive design y metadatos."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-black text-white py-28">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <Text>Servicios</Text>
            </h1>
            <p className="text-xl max-w-3xl">
              Ofrecemos soluciones digitales completas que te ayudarán a destacar en el mundo digital y conseguir tus objetivos de negocio.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

 {/* Process Section */}
<section className="bg-gray-50 dark:bg-gray-900 section-padding">
  <div className="container-custom">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Nuestro Proceso
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Así es como trabajamos para que todo salga bien
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="font-bold text-primary text-xl">1</span>
        </div>
        <h3 className="text-lg font-medium mb-2">Escuchamos</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Entendemos tus ideas y objetivos antes de empezar
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="font-bold text-primary text-xl">2</span>
        </div>
        <h3 className="text-lg font-medium mb-2">Diseñamos</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Te mostramos bocetos y propuestas para definir el estilo
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="font-bold text-primary text-xl">3</span>
        </div>
        <h3 className="text-lg font-medium mb-2">Desarrollamos</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Transformamos las ideas en un sitio funcional y rápido
        </p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="font-bold text-primary text-xl">4</span>
        </div>
        <h3 className="text-lg font-medium mb-2">Publicamos</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Ponemos todo online y te ayudamos a mantenerlo al día
        </p>
      </div>
    </div>
  </div>
</section>


        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">
                Preguntas Frecuentes
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-20">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para impulsar tu presencia digital?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contacta con nosotros para discutir cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            <ModernButton asChild variant="primary">
              <TallyButton text="Solicitar presupuesto" className="text-white" />
            </ModernButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Servicios;
