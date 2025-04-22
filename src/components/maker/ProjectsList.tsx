import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Star } from 'lucide-react';

// This would typically come from Google Sheets
const projects = [
  {
    id: 1,
    title: 'Interactive Art Installation',
    description: 'A responsive light installation that reacts to sound and movement, created for a local art exhibition.',
    imageUrl: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg',
    tags: ['Installation Art', 'Arduino', 'Processing'],
    link: '#',
  },
  {
    id: 2,
    title: 'Digital Illustration Series',
    description: 'A collection of digital illustrations exploring themes of nature and technology.',
    imageUrl: 'https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg',
    tags: ['Digital Art', 'Illustration', 'Procreate'],
    link: '#',
  },
  {
    id: 3,
    title: 'Web Animation Experiments',
    description: 'A series of interactive web animations created with JavaScript and Canvas.',
    imageUrl: 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg',
    tags: ['Web Development', 'Animation', 'JavaScript'],
    link: '#',
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

const ProjectsList: React.FC = () => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-navy-700 dark:text-beige-100 mb-6">
        Creative Projects
      </h3>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            variants={item}
            className="bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="sm:flex">
              <div className="sm:w-1/3 h-48 sm:h-auto">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:w-2/3">
                <h4 className="text-lg font-semibold text-navy-700 dark:text-beige-100 mb-2">
                  {project.title}
                </h4>
                <p className="text-navy-600 dark:text-beige-200 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs rounded-full bg-navy-100 text-navy-600 dark:bg-navy-700 dark:text-beige-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy-500 dark:text-mustard-400 hover:text-navy-600 dark:hover:text-mustard-300"
                >
                  <span className="mr-2">View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsList;