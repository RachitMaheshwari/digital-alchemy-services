
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
};

const Testimonial = ({ quote, author, role, avatar, rating }: TestimonialProps) => {
  return (
    <Card className="h-full flex flex-col bg-white hover:shadow-md transition-all duration-300 border-gray-200">
      <CardContent className="pt-6 pb-4 px-6">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`}
            />
          ))}
        </div>
        
        <blockquote className="text-gray-700 mb-6">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center mt-auto">
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-md"
          />
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
