import React from 'react';
import { motion } from 'framer-motion';
import * as lucide from 'lucide-react';
import ProjectsList from '../components/maker/ProjectsList';
import InstagramGrid from '../components/maker/InstagramGrid';
import EventsList from '../components/maker/EventsList';

const MakerPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center p-3 bg-olive-100 dark:bg-olive-700 rounded-full mb-4">
          <lucide.Paintbrush size={24} className="text-olive-600 dark:text-beige-100" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-800 dark:text-beige-100">The Maker and Artist</h1>
        <p className="mt-4 text-xl text-navy-600 dark:text-beige-200 max-w-2xl mx-auto">
          Projects, creations, and artistic expressions across various mediums
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <ProjectsList />
        </motion.div>
        
        <div className="order-1 lg:order-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <EventsList />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <InstagramGrid />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MakerPage;