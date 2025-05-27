import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  videoUrl: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  videoUrl,
  tags,
  link = "#"
}: ProjectCardProps) => {
  const posterUrl = videoUrl.replace(/\.\w+$/, ".png");
  const videoRef = useRef<HTMLVideoElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Forzar play cuando el video puede reproducirse
  useEffect(() => {
    if (inView && videoRef.current) {
      const attemptPlay = () => {
        videoRef.current?.play().catch(() => {
          // Algunos browsers lo bloquean, no hacemos nada
        });
      };

      videoRef.current.addEventListener("loadeddata", attemptPlay);
      return () => {
        videoRef.current?.removeEventListener("loadeddata", attemptPlay);
      };
    }
  }, [inView]);

  return (
    <Card className="overflow-hidden group border-0 shadow-lg">
      <div ref={ref} className="relative overflow-hidden">
        {inView && (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            preload="none"
            muted
            playsInline
            loop
            autoPlay
            className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>
        <Button variant="ghost" size="sm" asChild className="group">
          <Link to={link} className="inline-flex items-center">
            Ver proyecto
            <ArrowRight
              size={16}
              className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
