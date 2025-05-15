
import { Link } from "react-router-dom";
import SplitText from "@/components/ui/SplitText";
import { ModernButton } from "@/components/ui/ModernButton";
import { TallyButton } from "@/components/ui/TallyButton";

const HeroSection = () => {
  return <div className="bg-black text-white py-32 md:py-48">
      <div className="container-custom mx-auto text-center">
        <div className="mb-8">
          <img src="/lovable-uploads/5e8d1aa7-1a51-41fc-bc33-a82de393e6e4.png" alt="MA Design Logo" className="h-28 md:h-32 mx-auto mb-6" />
        </div>
        
        <SplitText
          text="Desarrollo y Diseño Web"
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight"
          delay={75}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing={(t) => t * t}
          threshold={0.1}
          rootMargin="-100px"
        />
        
        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        Hacemos webs que reflejan lo que sos y conectan con quienes te eligen.


        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <ModernButton asChild variant="primary">
            <Link to="/proyectos">Ver Proyectos</Link>
          </ModernButton>
          <ModernButton asChild variant="secondary">
            <TallyButton text="Contáctanos" className="text-black !text-black hover:text-primary" />

          </ModernButton>
        </div>
      </div>
    </div>;
};
export default HeroSection;
