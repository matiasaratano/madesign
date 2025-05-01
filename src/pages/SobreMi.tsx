
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { ModernButton } from "@/components/ui/ModernButton";
import { TallyButton } from "@/components/ui/TallyButton";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Text } from "recharts";

const SobreMi = () => {
  const skills = [
    "React", "Next.js", "Vue.js", "Node.js", 
    "TypeScript", "JavaScript", "HTML5", "CSS3/SASS", 
    "Tailwind CSS", "MongoDB", "PostgreSQL", "RESTful API",
    , "Git", "Github", "Supabase", "Firebase", 
    "UI/UX Design", "Figma", "Responsive Design"
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-black text-white py-28">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <Text>Nosotros</Text>
            </h1>
            <p className="text-xl max-w-3xl">
              Diseñando y desarrollando experiencias digitales que impulsan negocios
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop"
                  alt="Sobre nosotros"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                MA Design nació del entusiasmo por crear sitios web que no solo se vean bien, sino que también sean prácticos y fáciles de usar. Con experiencia en diseño y desarrollo, ayudamos a personas y empresas a tener una presencia online clara y atractiva.                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nos gusta pensar en cada proyecto como una colaboración: escuchamos, proponemos ideas y buscamos soluciones que realmente sirvan. Nos enfocamos en que todo funcione bien, sea simple de navegar y tenga sentido para quien lo usa.

</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/proyectos">
                      Ver nuestro trabajo
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-50 dark:bg-gray-900 section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Nuestra Misión
              </h2>
              <p className="text-xl mb-8">
              Creamos soluciones digitales que ayudan a nuestros clientes a crecer, mejorar su presencia online, combinando tecnología con ideas prácticas.              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-medium mb-3">Innovación</h3>
                  <p className="text-gray-600 dark:text-gray-300">Nos mantenemos a la vanguardia de las tecnologías emergentes para ofrecer soluciones modernas y efectivas.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Calidad</h3>
                  <p className="text-gray-600 dark:text-gray-300">Cada línea de código y cada elemento visual se crea con atención meticulosa al detalle y las mejores prácticas.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Resultados</h3>
                  <p className="text-gray-600 dark:text-gray-300">Nos enfocamos en crear soluciones que generan un impacto real y medible en el negocio de nuestros clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Nuestras Habilidades
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Dominamos un amplio conjunto de tecnologías y herramientas para crear soluciones digitales completas
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-20">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Te gustaría trabajar con nosotros?
            </h2>
            
            <ModernButton asChild variant="primary">
              <TallyButton text="Hablemos de tu proyecto" className="text-white" />
            </ModernButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SobreMi;
