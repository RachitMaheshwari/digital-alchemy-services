
import { ReactNode } from 'react';

type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: 'blue' | 'purple' | 'green';
};

const ProcessStep = ({ number, title, description, icon, color }: ProcessStepProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600 shadow-blue-500/30';
      case 'purple':
        return 'from-techpro-purple to-purple-600 shadow-techpro-purple/30';
      case 'green':
        return 'from-green-500 to-green-600 shadow-green-500/30';
      default:
        return 'from-techpro-purple to-purple-600 shadow-techpro-purple/30';
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getColorClasses()} shadow-lg flex items-center justify-center text-white text-2xl font-bold`}>
          {number}
        </div>
        <div className="absolute -right-1 -top-1 bg-white p-1 rounded-full shadow-md">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessStep;
