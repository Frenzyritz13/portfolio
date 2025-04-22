import React from 'react';
import { Linkedin, Instagram, ExternalLink } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ritvimishra',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/frenzy.works',
      icon: <Instagram size={20} />,
    },
    {
      name: 'Devpost',
      url: 'https://www.devpost.com/ritvi',
      icon: <ExternalLink size={20} />,
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-navy-500 text-beige-50 hover:bg-navy-400 
                    dark:bg-navy-700 dark:hover:bg-navy-600 transition-colors duration-300"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;