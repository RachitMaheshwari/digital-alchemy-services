
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CountUp from './CountUp';

type StatCardProps = {
  value: number;
  label: string;
  icon: ReactNode;
  suffix?: string;
};

const StatCard = ({ value, label, icon, suffix = '' }: StatCardProps) => {
  return (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold flex items-end">
              <CountUp end={value} duration={2} />
              {suffix && <span>{suffix}</span>}
            </div>
            <p className="text-gray-600 mt-1">{label}</p>
          </div>
          <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-gray-100">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
