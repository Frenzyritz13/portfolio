import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

// This would typically come from an Instagram API integration
const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    likes: 123,
    comments: 45,
    caption: 'Working on a new project #creativecoding',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/1573434/pexels-photo-1573434.jpeg',
    likes: 98,
    comments: 27,
    caption: 'Exploring new color palettes #designinspiration',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
    likes: 156,
    comments: 32,
    caption: 'Latest artwork finished today #digitalart',
  },
  {
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    likes: 201,
    comments: 56,
    caption: 'Behind the scenes of my latest installation #contemporaryart',
  },
  {
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/3226806/pexels-photo-3226806.jpeg',
    likes: 178,
    comments: 41,
    caption: 'New sketch from my sketchbook #artistsofinstagram',
  },
  {
    id: 6,
    imageUrl: 'https://images.pexels.com/photos/1917575/pexels-photo-1917575.jpeg',
    likes: 143,
    comments: 38,
    caption: 'Work in progress #creativeminds',
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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const InstagramGrid: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-navy-700 dark:text-beige-100">
          Instagram Feed
        </h3>
        <a
          href="https://www.instagram.com/frenzy.works"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-navy-500 dark:text-beige-200 hover:text-navy-600 dark:hover:text-beige-100"
        >
          <Instagram size={18} className="mr-2" />
          <span>@frenzy.works</span>
        </a>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4"
      >
        {instagramPosts.map((post) => (
          <motion.div key={post.id} variants={item} className="aspect-square overflow-hidden rounded-lg">
            <div className="relative group w-full h-full">
              <img 
                src={post.imageUrl} 
                alt={post.caption} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-beige-50 text-sm line-clamp-2">{post.caption}</p>
                <div className="flex items-center mt-2 text-beige-50 text-xs">
                  <span className="mr-3">{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InstagramGrid;