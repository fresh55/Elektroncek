'use client';
import { formatDate } from '@/lib/formatTime';
import { TfiLocationPin } from 'react-icons/tfi';

interface HeadingProps {
  title: string;
  date: Date,
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ 
  title,
  date,
  subtitle,
  center
}) => {
  return ( 
    <div className="mb-4">
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="flex items-center gap-1.5 text-4xl font-bold mb-2">
        {title}
      </div>
      <div className='flex items-center gap-2'>
      <TfiLocationPin/>
      <div className="text-lg truncate ">
      
       {subtitle}
       <span className="lt-text-gray-500">
            <span className="mx-1.5">·</span>
            <span className="text-md" >
              {formatDate(date)}
            </span>
          </span>
      </div>
      </div>
    </div>
    </div>
   );
}
 
export default Heading;