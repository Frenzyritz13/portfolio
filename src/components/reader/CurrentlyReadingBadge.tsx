import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface CurrentlyReadingBadgeProps {
  book: {
    title: string;
    author: string;
    coverUrl: string;
    progress: number;
  };
}

const CurrentlyReadingBadge: React.FC<CurrentlyReadingBadgeProps> = ({ book }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto"
    >
      <div className="p-2 bg-navy-600 text-beige-50 text-center font-medium flex items-center justify-center">
        <BookOpen size={16} className="mr-2" />
        <span>Currently Reading</span>
      </div>
      <div className="flex p-4">
        <div className="w-1/3">
          <img 
            src={book.coverUrl} 
            alt={book.title} 
            className="w-full h-auto object-cover rounded shadow"
          />
        </div>
        <div className="w-2/3 pl-4">
          <h3 className="text-lg font-bold text-navy-800 dark:text-beige-100">{book.title}</h3>
          <p className="text-navy-600 dark:text-beige-200">by {book.author}</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-navy-600 dark:text-beige-200 mb-1">
              <span>Progress</span>
              <span>{book.progress}%</span>
            </div>
            <div className="w-full bg-navy-200 dark:bg-navy-700 rounded-full h-2">
              <div 
                className="bg-navy-600 dark:bg-mustard-500 h-2 rounded-full" 
                style={{ width: `${book.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentlyReadingBadge;