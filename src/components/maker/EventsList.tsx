import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

// This would typically come from Google Sheets
const events = [
  {
    id: 1,
    title: 'Art Exhibition: "Digital Dreams"',
    date: 'June 15-30, 2023',
    time: '10:00 AM - 6:00 PM',
    location: 'Modern Art Gallery, New York',
    link: '#',
  },
  {
    id: 2,
    title: 'Creative Coding Workshop',
    date: 'July 8, 2023',
    time: '2:00 PM - 5:00 PM',
    location: 'Tech Hub, San Francisco',
    link: '#',
  },
  {
    id: 3,
    title: 'Design Conference: "Future of Interfaces"',
    date: 'August 12-14, 2023',
    time: 'All Day',
    location: 'Design Center, Chicago',
    link: '#',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const EventsList: React.FC = () => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-navy-700 dark:text-beige-100 mb-6">
        Upcoming Events
      </h3>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {events.map((event) => (
          <motion.a
            key={event.id}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="block bg-white dark:bg-navy-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h4 className="text-lg font-medium text-navy-700 dark:text-beige-100 mb-2">
              {event.title}
            </h4>
            <div className="space-y-2 text-sm text-navy-600 dark:text-beige-200">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-olive-600 dark:text-olive-400" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-olive-600 dark:text-olive-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-olive-600 dark:text-olive-400" />
                <span>{event.location}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default EventsList;