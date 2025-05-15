import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TallyButton } from "@/components/ui/TallyButton";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto px-4">
        <div className="flex h-16 items-center justify-between relative">
          <Link to="/" className="flex items-center">
            <img
              alt="MA Design Logo"
              src="/lovable-uploads/bfa82f10-f301-4e3f-a1f8-49fea31fb561.png"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Inicio", "Proyectos", "Servicios", "Nosotros"].map((label, index) => {
              const paths = ["/", "/proyectos", "/servicios", "/sobre-mi"];
              return (
                <Link
                  key={label}
                  to={paths[index]}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group",
                    scrolled
                      ? "text-black dark:text-white hover:text-primary"
                      : "text-white hover:text-white"
                  )}
                >
                  <span className="relative z-10">{label}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-black dark:bg-white" : "bg-white"
                    }`}
                  />
                </Link>
              );
            })}

<Button
  asChild
  variant="outline"
  className={`transition-all duration-300 ${
    scrolled
        ? "bg-white text-black border-gray-300 hover:border-gray-500 hover:bg-gray-100"
      : "bg-white text-black border-gray-300 hover:bg-gray-100"
  }`}
>
  <Link to="/contacto" className="w-full h-full flex items-center justify-center">
    Contacto
  </Link>
</Button>


          </nav>

          <button
            className={`inline-flex items-center justify-center md:hidden p-2 ${
              scrolled ? "text-black dark:text-white" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white dark:bg-black p-6 flex flex-col gap-4 h-screen overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {["Inicio", "Proyectos", "Servicios", "Nosotros"].map((label, index) => {
              const paths = ["/", "/proyectos", "/servicios", "/sobre-mi"];
              return (
                <Link
                  key={label}
                  to={paths[index]}
                  className="flex items-center gap-3 text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ChevronDown size={20} className="rotate-0" />
                  {label}
                </Link>
              );
            })}

            <Button
              className="w-full py-3 px-4 rounded-lg transition-all duration-300 bg-primary hover:bg-primary/90 text-white"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <Link to="/contacto">Contacto</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
