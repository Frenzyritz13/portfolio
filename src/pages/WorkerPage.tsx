import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/worker/Timeline';
import { Briefcase } from 'lucide-react';

const WorkerPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center p-3 bg-navy-100 dark:bg-navy-700 rounded-full mb-4">
          <Briefcase size={24} className="text-navy-600 dark:text-beige-100" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-800 dark:text-beige-100">Worker Me</h1>
        <p className="mt-4 text-xl text-navy-600 dark:text-beige-200 max-w-2xl mx-auto">
          My professional journey, experiences, and skills that have shaped my career path
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Timeline />
      </motion.div>
    </div>
  );
};

export default WorkerPage;