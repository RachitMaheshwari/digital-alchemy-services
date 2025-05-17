
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

type FeatureShowcaseProps = {
  title: string;
  description: string;
  features: string[];
};

const FeatureShowcase = ({ title, description, features }: FeatureShowcaseProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      <p className="text-white/80 text-lg">{description}</p>
      
      <ul className="space-y-3 my-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="bg-white/20 p-1 rounded-full mr-3">
              <Check size={16} className="text-white" />
            </span>
            <span className="text-white/90">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className="bg-white text-techpro-blue hover:bg-white/90">
        Learn More
      </Button>
    </div>
  );
};

export default FeatureShowcase;
