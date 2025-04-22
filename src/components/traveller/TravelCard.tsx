import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera } from 'lucide-react';

interface TravelCardProps {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  onClick: () => void;
}

const TravelCard: React.FC<TravelCardProps> = ({
  id,
  title,
  location,
  date,
  description,
  imageUrl,
  isActive,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
        isActive ? 'ring-2 ring-mustard-400' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center mt-1">
              <MapPin size={16} className="mr-2 text-mustard-300" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-navy-600 dark:text-beige-200 mb-3">
          <Calendar size={16} className="mr-2 text-olive-600 dark:text-olive-400" />
          <span>{date}</span>
        </div>
        <p className="text-navy-700 dark:text-beige-100 line-clamp-3">{description}</p>
      </div>
    </motion.div>
  );
};

export default TravelCard;