import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import CurrentlyReadingBadge from '../components/reader/CurrentlyReadingBadge';
import BooksList from '../components/reader/BooksList';

// This would typically come from Google Sheets
const currentBook = {
  title: 'Project Hail Mary',
  author: 'Andy Weir',
  coverUrl: 'https://images.pexels.com/photos/2395720/pexels-photo-2395720.jpeg',
  progress: 65,
};

const ReaderPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center p-3 bg-beige-100 dark:bg-beige-700 rounded-full mb-4">
          <BookOpen size={24} className="text-beige-600 dark:text-beige-100" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-800 dark:text-beige-100">Reader and Muser</h1>
        <p className="mt-4 text-xl text-navy-600 dark:text-beige-200 max-w-2xl mx-auto">
          Books, thoughts, and inspirations that shape my perspective
        </p>
      </motion.div>
      
      <div className="mb-12">
        <CurrentlyReadingBadge book={currentBook} />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-navy-800 dark:text-beige-100 mb-6">
          Recently Read
        </h2>
        <BooksList />
      </motion.div>
    </div>
  );
};

export default ReaderPage;