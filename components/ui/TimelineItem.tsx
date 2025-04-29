// src/components/TimelineItem.tsx
import Image from 'next/image';

interface TimelineItemProps {
  item: {
    id: number;
    date: string;
    title: string;
    description: string;
    imageUrl?: string;
  };
  isLeft: boolean; // To alternate sides
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLeft }) => {
  const { date, title, description, imageUrl } = item;

  // Base classes for the container
//   const containerClasses = "mb-8 flex justify-between items-center w-full";
//   const contentSideClasses = isLeft ? "order-1 w-5/12" : "order-1 w-5/12";
//   const spacerSideClasses = isLeft ? "order-2 w-1/12" : "order-2 w-1/12"; // Adjust spacer width if needed
//   const contentAlignment = isLeft ? "text-right" : "text-left";

  // Responsive handling: Stack vertically on smaller screens
  const responsiveContainerClasses = "md:flex"; // Use flexbox on medium screens and up
  const responsiveContentClasses = "w-full md:w-5/12"; // Full width on small, 5/12 on medium+
  const responsiveContentAlignment = isLeft ? "md:text-right" : "md:text-left";
  const responsiveOrder = isLeft ? "md:order-1" : "md:order-1"; // Content always first in flex order visually

  return (
    <div className={`${responsiveContainerClasses} mb-8 flex ${isLeft ? 'md:flex-row-reverse' : 'flex-row'} items-start justify-between w-full`}>
      {/* Content Box */}
      <div className={`${responsiveContentClasses} ${responsiveOrder} px-4 py-4 bg-white dark:bg-gray-800 shadow-md rounded-lg`}>
        <p className={`mb-3 text-base font-normal text-gray-500 dark:text-gray-400 ${responsiveContentAlignment}`}>{date}</p>
        <h3 className={`mb-2 text-lg font-semibold text-gray-900 dark:text-white ${responsiveContentAlignment}`}>{title}</h3>
        {imageUrl && (
          <div className={`my-2 flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
            <Image
              src={imageUrl}
              alt={title}
              width={150}
              height={100} // Adjust height based on aspect ratio or desired size
              className="object-cover rounded"
            />
          </div>
        )}
        <p className={`text-lg font-normal text-gray-600 dark:text-gray-300 ${responsiveContentAlignment}`}>{description}</p>
      </div>

      {/* Center Dot and Line Connector (simplified for responsiveness) */}
      <div className="hidden md:flex order-none w-1/12 items-center justify-center">
         {/* This div is mainly for spacing on larger screens */}
      </div>

       {/* Mobile Dot/Line Representation (integrated with main line) */}
       {/* The main line is handled by the parent Timeline component */}

    </div>
  );
};

export default TimelineItem;


