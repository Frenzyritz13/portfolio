import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar } from 'lucide-react';

// This would typically come from Google Sheets
const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    coverUrl: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg',
    rating: 4.5,
    dateRead: 'January 2023',
    review: 'A practical guide to building good habits and breaking bad ones. This book provides actionable strategies that can be applied to daily life.',
    tags: ['Self-Improvement', 'Psychology', 'Productivity'],
  },
  {
    id: 2,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    coverUrl: 'https://images.pexels.com/photos/2767814/pexels-photo-2767814.jpeg',
    rating: 5,
    dateRead: 'November 2022',
    review: 'An enlightening journey through the history of our species. Harari offers thought-provoking insights into how humans have evolved and shaped the world.',
    tags: ['History', 'Anthropology', 'Science'],
  },
  {
    id: 3,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverUrl: 'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg',
    rating: 4,
    dateRead: 'August 2022',
    review: 'A beautiful novel about regret, hope, and the infinite possibilities of life. The story explores what makes life worth living through a magical library that contains books of alternate lives.',
    tags: ['Fiction', 'Fantasy', 'Philosophy'],
  },
  {
    id: 4,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    coverUrl: 'https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg',
    rating: 4.5,
    dateRead: 'May 2022',
    review: 'A fascinating exploration of the two systems that drive how we think—the fast, intuitive system and the slow, deliberate system. Kahneman reveals the biases and cognitive fallacies that affect our judgment.',
    tags: ['Psychology', 'Behavioral Economics', 'Decision Making'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const BooksList: React.FC = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {books.map((book) => (
        <motion.div 
          key={book.id} 
          variants={item}
          className="bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="sm:flex">
            <div className="sm:w-1/4 md:w-1/5 p-4 flex justify-center">
              <img 
                src={book.coverUrl} 
                alt={book.title} 
                className="w-32 h-auto object-cover rounded shadow"
              />
            </div>
            <div className="p-4 sm:p-6 sm:w-3/4 md:w-4/5">
              <h3 className="text-xl font-bold text-navy-800 dark:text-beige-100 mb-1">
                {book.title}
              </h3>
              <p className="text-navy-600 dark:text-beige-200 mb-2">by {book.author}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star size={16} className="text-mustard-500 mr-1" />
                  <span className="text-navy-600 dark:text-beige-200">{book.rating}/5</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="text-olive-600 dark:text-olive-400 mr-1" />
                  <span className="text-navy-600 dark:text-beige-200">{book.dateRead}</span>
                </div>
              </div>
              
              <p className="text-navy-700 dark:text-beige-100 mb-4">{book.review}</p>
              
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs rounded-full bg-navy-100 text-navy-600 dark:bg-navy-700 dark:text-beige-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BooksList;