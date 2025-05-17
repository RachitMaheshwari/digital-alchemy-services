
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type ProjectCardProps = {
  image: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
};

const ProjectCard = ({ image, title, category, description, technologies }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-white/80 text-gray-800 backdrop-blur-sm hover:bg-white">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100 font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-gray-100 pt-4">
        <Button variant="outline" className="w-full hover:bg-techpro-purple/5 hover:text-techpro-purple">
          View Case Study
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
