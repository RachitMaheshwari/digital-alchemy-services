
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

type PriceCardProps = {
  title: string;
  description: string;
  price: string;
  unit?: string;
  features: string[];
  isPopular?: boolean;
  icon?: ReactNode;
};

const PriceCard = ({ 
  title, 
  description, 
  price, 
  unit = '', 
  features, 
  isPopular = false, 
  icon 
}: PriceCardProps) => {
  return (
    <Card className={`relative h-full flex flex-col transition-all duration-300 hover:shadow-md ${
      isPopular 
        ? 'border-techpro-purple shadow-lg shadow-techpro-purple/10' 
        : 'hover:border-gray-300'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2">
          <span className="bg-gradient-to-r from-techpro-purple to-purple-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className={isPopular ? 'bg-techpro-purple/5' : ''}>
        {icon && <div className="mb-4">{icon}</div>}
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
        <div className="mt-4 flex items-end">
          <span className="text-3xl font-bold">{price}</span>
          {unit && <span className="text-gray-500 ml-1">{unit}</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`p-0.5 rounded-full mr-2 mt-1 ${
                isPopular ? 'bg-techpro-purple/20 text-techpro-purple' : 'bg-gray-100 text-gray-700'
              }`}>
                <Check size={12} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant={isPopular ? "default" : "outline"} 
          className={`w-full ${
            isPopular 
              ? 'bg-gradient-to-r from-techpro-purple to-purple-600 hover:from-techpro-purple/90 hover:to-purple-600/90 shadow-md shadow-techpro-purple/20' 
              : 'border-techpro-purple text-techpro-purple hover:bg-techpro-purple/10'
          }`}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
