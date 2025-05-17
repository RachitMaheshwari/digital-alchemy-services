
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
};

const ServiceCard = ({ icon, title, description, items }: ServiceCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-techpro-purple/30 group">
      <CardHeader>
        <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-techpro-purple/10 to-techpro-blue/10 w-16 h-16 flex items-center justify-center text-techpro-purple group-hover:from-techpro-purple/20 group-hover:to-techpro-blue/20 transition-all duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle
                className="h-5 w-5 mr-2 text-techpro-purple flex-shrink-0 mt-0.5"
                size={18}
              />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gray-50 hover:bg-gray-100 text-techpro-purple border border-transparent hover:border-techpro-purple/30 transition-all duration-300">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
