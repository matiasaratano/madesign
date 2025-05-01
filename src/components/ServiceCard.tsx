
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  className
}: ServiceCardProps) => {
  return (
    <Card className={cn("h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300", className)}>
      <CardHeader className="pb-0">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
