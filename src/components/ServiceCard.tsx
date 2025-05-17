
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
};

const ServiceCard = ({ icon, title, description, items }: ServiceCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-techpro-purple/30">
      <CardHeader>
        <div className="mb-4 p-2 rounded-lg bg-techpro-purple/10 w-12 h-12 flex items-center justify-center text-techpro-purple">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 mr-2 text-techpro-purple flex-shrink-0 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-techpro-purple/10 hover:bg-techpro-purple/20 text-techpro-purple">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
