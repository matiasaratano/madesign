
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { ModernButton } from "@/components/ui/ModernButton";
import { TallyButton } from "@/components/ui/TallyButton";
import { Link } from "react-router-dom";
import { Text } from "recharts";

const Proyectos = () => {
  const projects = [
    {
      title: "Web Departamentos Norte",
      description: "Website de complejo de departamentos Norte Villa Gesell.",
      videoUrl: "./norte.mp4",
      tags: ["Landing", "HTML", "Javascript",  "Firebase"],
      link: "http://www.departamentosnorte.com.ar",
    },
    {
      title: "Web Laberinto",
      description: "Landing page para Laberinto con formulario de contacto",
      videoUrl: "./labe.mp4",    
      tags: ["HTML", "CSS", "Bootstrap", "PHP"],
      link: "http://www.laberintogesell.com",
    },
    {
      title: "Web En Esta Tierra",
      description: "Website En esta tierra, complejo turístico en Villa Gesell.",
      videoUrl: "./tierra.mp4",      
      tags: ["HTML", "CSS", "Javascript", "Landing"],
      link: "https://matiasaratano.github.io/enestatierra/",
    },
    
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-black text-white py-28">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <Text>Proyectos</Text>
            </h1>
            <p className="text-xl max-w-3xl">
              Explora algunos de nuestros proyectos. 
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Te gustaría ser el próximo?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Conversemos sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <ModernButton asChild variant="primary">
              <TallyButton text="Contáctanos" className="text-white" />
            </ModernButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Proyectos;
