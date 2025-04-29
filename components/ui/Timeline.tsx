// src/components/Timeline.tsx
import TimelineItem from './TimelineItem';

interface TimelineProps {
  data: Array<{
    id: number;
    date: string;
    title: string;
    description: string;
    imageUrl?: string;
  }>;
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="relative container mx-auto px-6 py-12">
       {/* The Vertical Line */}
       <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-purple-600 -ml-0.5 hidden md:block"></div>
       {/* Mobile Vertical Line (optional, can be centered or offset) */}
       <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-purple-600 -ml-0.5 block md:hidden"></div>


      {data.map((item, index) => (
        <div key={item.id} className="relative">
           {/* Timeline Dot - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 -ml-3 z-10">
             <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full"></div>
          </div>
           {/* Timeline Dot - Mobile */}
           <div className="block md:hidden absolute left-6 top-4 -ml-3 z-10">
             <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full"></div>
           </div>

          <TimelineItem item={item} isLeft={index % 2 === 0} />
        </div>
      ))}
    </div>
  );
};

export default Timeline;