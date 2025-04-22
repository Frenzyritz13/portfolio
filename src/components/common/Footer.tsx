import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-beige-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {currentYear} Ritvi Mishra. All rights reserved.</p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;