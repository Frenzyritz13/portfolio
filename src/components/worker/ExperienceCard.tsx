import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  onClick: () => void;
  isActive: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  skills,
  onClick,
  isActive,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-navy-600 text-beige-50 shadow-lg' 
          : 'bg-beige-100 text-navy-700 hover:bg-beige-200 dark:bg-navy-800 dark:text-beige-100 dark:hover:bg-navy-700'
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className={`text-xl font-bold ${isActive ? 'text-mustard-300' : 'text-mustard-600 dark:text-mustard-400'}`}>
            {title}
          </h3>
          <h4 className="text-lg font-medium">{company}</h4>
        </div>
        
        <div className="flex items-center mt-2 sm:mt-0">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">
            {startDate} - {endDate || 'Present'}
          </span>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        <MapPin size={16} className="mr-2" />
        <span className="text-sm">{location}</span>
      </div>
      
      <p className={`mb-4 line-clamp-2 ${isActive ? 'line-clamp-none' : ''}`}>{description}</p>
      
      {isActive && (
        <div className="mt-4">
          <h5 className="font-medium mb-2">Skills</h5>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 text-xs rounded-full bg-beige-200 text-navy-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;