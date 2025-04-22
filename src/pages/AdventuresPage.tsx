import React from 'react';
import { motion } from 'framer-motion';
import * as lucide from 'lucide-react';

const adventures = [
  {
    title: "Skydiving in Dubai",
    date: "March 2024",
    description: "First time jumping from 13,000 feet over Palm Jumeirah",
    image: "https://images.pexels.com/photos/1608099/pexels-photo-1608099.jpeg",
    category: "Extreme Sports"
  },
  {
    title: "Learning Piano",
    date: "January 2024 - Present",
    description: "Started my journey into classical music with weekly piano lessons",
    image: "https://images.pexels.com/photos/164769/pexels-photo-164769.jpeg",
    category: "Music"
  },
  {
    title: "Pottery Workshop",
    date: "February 2024",
    description: "Weekend workshop learning the basics of wheel throwing",
    image: "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg",
    category: "Crafts"
  }
];

const AdventuresPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center p-3 bg-navy-100 dark:bg-navy-700 rounded-full mb-4">
          <lucide.Sparkles size={24} className="text-navy-600 dark:text-beige-100" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-800 dark:text-beige-100">Adventures</h1>
        <p className="mt-4 text-xl text-navy-600 dark:text-beige-200 max-w-2xl mx-auto">
          Trying new things and embracing novel experiences
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {adventures.map((adventure, index) => (
          <motion.div
            key={adventure.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <img 
                src={adventure.image} 
                alt={adventure.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-navy-900/70 text-white text-sm rounded-full">
                {adventure.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy-800 dark:text-beige-100 mb-2">
                {adventure.title}
              </h3>
              <p className="text-navy-600 dark:text-beige-200 text-sm mb-4">
                {adventure.date}
              </p>
              <p className="text-navy-700 dark:text-beige-100">
                {adventure.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdventuresPage;