
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
  return (
    <Card className="overflow-hidden group border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <video
          src={videoUrl}
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
        />
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
