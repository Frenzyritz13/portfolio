import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

// This would typically come from Google Sheets
const experiences = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'Design Studio Inc.',
    location: 'San Francisco, CA',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: 'Led the redesign of the company\'s flagship product, resulting in a 40% increase in user engagement. Collaborated with cross-functional teams to implement new features and improve user experience.',
    skills: ['UI/UX Design', 'Figma', 'User Research', 'Design Systems', 'Prototyping'],
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'Tech Innovators',
    location: 'New York, NY',
    startDate: 'Mar 2019',
    endDate: 'Dec 2021',
    description: 'Designed user interfaces for web and mobile applications. Conducted user research and usability testing to inform design decisions. Created wireframes, prototypes, and high-fidelity mockups.',
    skills: ['Wireframing', 'Adobe XD', 'User Testing', 'Information Architecture', 'Visual Design'],
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'Creative Agency',
    location: 'Chicago, IL',
    startDate: 'Jun 2017',
    endDate: 'Feb 2019',
    description: 'Developed brand identities, marketing materials, and digital assets for various clients. Collaborated with the marketing team to create cohesive visual strategies across multiple platforms.',
    skills: ['Adobe Creative Suite', 'Brand Identity', 'Typography', 'Print Design', 'Digital Design'],
  },
  {
    id: 4,
    title: 'Design Intern',
    company: 'StartUp Co.',
    location: 'Boston, MA',
    startDate: 'Jan 2017',
    endDate: 'May 2017',
    description: 'Assisted senior designers with various design tasks. Created social media graphics and marketing materials. Participated in brainstorming sessions and client meetings.',
    skills: ['Illustrator', 'Photoshop', 'Social Media Design', 'Branding'],
  },
];

const Timeline: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number>(1);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-navy-300 dark:bg-navy-600"></div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div 
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row items-start gap-8 ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 bg-navy-500 dark:bg-navy-400 rounded-full flex items-center justify-center">
                <span className="text-beige-50 text-sm font-bold">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className={`pl-16 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-0 sm:pl-4' : 'sm:pl-0 sm:pr-4'} w-full sm:w-1/2`}>
                <ExperienceCard 
                  {...experience}
                  onClick={() => setActiveExperience(experience.id)}
                  isActive={activeExperience === experience.id}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;