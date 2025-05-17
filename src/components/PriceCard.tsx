
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type PriceCardProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  icon?: ReactNode;
};

const PriceCard = ({ title, description, price, features, isPopular = false, icon }: PriceCardProps) => {
  return (
    <Card className={`relative h-full flex flex-col transition-all duration-300 hover:shadow-md ${isPopular ? 'border-techpro-purple shadow-md' : 'hover:border-gray-300'}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2">
          <span className="bg-techpro-purple text-white text-xs font-medium px-2.5 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}
      <CardHeader>
        {icon && <div className="mb-4">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
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
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={isPopular ? "default" : "outline"} className={`w-full ${isPopular ? 'bg-techpro-purple hover:bg-techpro-purple/90' : 'border-techpro-purple text-techpro-purple hover:bg-techpro-purple/10'}`}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
