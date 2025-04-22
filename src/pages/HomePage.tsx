import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as lucide from 'lucide-react';

const HomePage: React.FC = () => {
  const sections = [
    {
      path: '/worker',
      title: 'Worker Me',
      icon: <lucide.User size={32} />,
      description: 'My professional journey and experiences',
      color: 'bg-navy-600 hover:bg-navy-500',
    },
    {
      path: '/maker',
      title: 'Maker and Artist',
      icon: <lucide.Paintbrush size={32} />,
      description: 'Projects, creations and artistic expressions',
      color: 'bg-olive-600 hover:bg-olive-500',
    },
    {
      path: '/traveller',
      title: 'Traveller',
      icon: <lucide.Map size={32} />,
      description: 'Adventures and explorations around the world',
      color: 'bg-mustard-600 hover:bg-mustard-500',
    },
    {
      path: '/reader',
      title: 'Reader and Muser',
      icon: <lucide.BookOpen size={32} />,
      description: 'Books, thoughts and inspirations',
      color: 'bg-beige-600 hover:bg-beige-500',
    },
    {
      path: '/adventures',
      title: 'Adventures',
      icon: <lucide.Sparkles size={32} />,
      description: 'Trying new things and embracing experiences',
      color: 'bg-navy-500 hover:bg-navy-400',
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

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-navy-600 dark:text-beige-200 mb-6">
              Hey, I am ritvi! I love talking about maker stuff, travelling literally anywhere! And trying a ton of new stuff
            </h2>
            <a 
              href="https://calendly.com/ritvi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-mustard-500 hover:bg-mustard-600 text-white rounded-lg transition-colors duration-300"
            >
              <lucide.Calendar size={20} className="mr-2" />
              Schedule a chat with me
            </a>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-navy-800 dark:text-beige-100">
            Know The <span className="text-mustard-600">Journey</span>
          </h1>
          <p className="mt-4 text-xl text-navy-600 dark:text-beige-200">
            Explore the different facets of who I am
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sections.map((section) => (
            <motion.div key={section.path} variants={item}>
              <Link 
                to={section.path}
                className={`block p-8 rounded-lg ${section.color} text-white shadow-lg 
                          transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                    <p className="mt-2 text-white/80">{section.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;