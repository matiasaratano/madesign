
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ModernButton } from "@/components/ui/ModernButton";
import { TallyButton } from "@/components/ui/TallyButton";
import { ArrowRight, Code, Layout, Database, PencilRuler } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CustomersSection } from "@/components/ui/customers-section";

const Index = () => {
  const featuredProjects = [{
    title: "Departamentos Norte",
    description: "Website de complejo de departamentos Norte Villa Gesell.",
    imageUrl: "/norte.mp4",
    tags: ["Landing", "HTML", "Javascript", "Firebase"],
    link: "http://www.departamentosnorte.com.ar",
  }, {
    title: "Laberinto Gesell",
    description: "Landing page para Laberinto Gesell con formulario de contacto.",
    imageUrl: "/labe.mp4",
    tags: ["HTML", "CSS", "Bootstrap", "PHP", "Javascript"],
 link: "http://www.laberintogesell.com",
  }, {
    title: "En esta tierra",
    description: "Página web para complejo turístico En esta tierra.",
    imageUrl: "/tierra.mp4",
    tags: ["HTML", "CSS", "Javascript", "Landing"],
    link: "https://matiasaratano.github.io/enestatierra/",
  }];

  const customers = [
    {
      src: "./logos/bdtlogo.png",
      alt: "bdt Logo",
      height: 12,
    },
    {
      src: "./logos/logo2.png",
      alt: "departamentos norte Logo",
      height: 6,
    },
    {
      src: "./logos/eetlogo.png",
      alt: "eet Logo",
      height: 8,
    },
    {
      src: "./logos/logolabe.webp",
      alt: "laberint Logo",
      height: 12,
    },
    {
      src: "./logos/logoeet.png",
      alt: "En esta tierra Logo",
      height: 12,
    },
   
  ];

  return <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Customers Section */}
        <CustomersSection customers={customers} />

        {/* Scroll Animation Section */}
        <section className="overflow-hidden bg-black text-white py-10">
          <ContainerScroll titleComponent={<h2 className="text-center text-xl md:text-4xl font-semibold text-white mb-10">
                Experiencias web <span className="text-4xl md:text-5xl font-bold">Modernas</span>
              </h2>}>
            <img src="/lovable-uploads/5e8d1aa7-1a51-41fc-bc33-a82de393e6e4.png" alt="MA Design Logo" className="h-20 md:h-28 mx-auto mb-6" />
          </ContainerScroll>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Soluciones digitales para impulsar tu presencia online y hacer crecer tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
  <ServiceCard
    title="Desarrollo Web"
    description="Armamos tu web desde cero, rápida, clara y adaptada a lo que necesitás. Desde una página simple hasta algo más complejo."
    icon={<Code size={24} />}
  />
  <ServiceCard
    title="UI/UX Design"
    description="Diseños fáciles de usar, pensados para que tus usuarios se sientan cómodos desde el primer click."
    icon={<PencilRuler size={24} />}
  />
  <ServiceCard
    title="Desarrollo Frontend"
    description="Le damos vida a los diseños para que se vean bien en todos los dispositivos y funcionen sin complicaciones."
    icon={<Layout size={24} />}
  />
  <ServiceCard
    title="Desarrollo Backend"
    description="Nos encargamos de que todo lo que no se ve funcione bien: datos, seguridad y rendimiento."
    icon={<Database size={24} />}
  />
</div>


            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link to="/servicios" className="inline-flex items-center">
                  Ver todos los servicios
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proyectos Destacados
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explora algunos de nuestros trabajos más recientes
              </p>
              {customers.map((logo, index) => (
                <img
                  key={index}
                  className="mx-auto h-auto w-fit dark:invert max-h-[40px] max-w-[80px] object-contain md:max-h-[65px] md:max-w-[120px]"
                  src={logo.src}
                  alt={logo.alt}
                  height={logo.height}
                  width="auto"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {featuredProjects.map((project, index) => (
  <ProjectCard
    key={index}
    title={project.title}
    description={project.description}
    videoUrl={project.imageUrl}
    tags={project.tags}
    link={project.link}
  />
))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link to="/proyectos" className="inline-flex items-center">
                  Ver todos los proyectos
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para dar el siguiente paso?
              </h2>
              <p className="text-xl mb-8">
                Contanos sobre tu proyecto y comencemos a trabajar juntos
              </p>
              <ModernButton asChild variant="primary">
                <TallyButton text="Contactar ahora" className="text-white" />
              </ModernButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Index;
