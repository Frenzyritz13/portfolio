import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as lucide from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/worker', label: 'Worker Me' },
    { path: '/maker', label: 'Maker and Artist' },
    { path: '/traveller', label: 'Traveller' },
    { path: '/reader', label: 'Reader and Muser' },
    { path: '/adventures', label: 'Adventures' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-beige-50/90 dark:bg-navy-900/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-navy-700 dark:text-beige-100">
              Know The
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            {/* Desktop Navigation */}
            <nav className="flex items-center mr-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-300 px-4 ${
                    location.pathname === item.path
                      ? 'text-mustard-600 dark:text-mustard-400'
                      : 'text-navy-600 dark:text-beige-100 hover:text-mustard-500 dark:hover:text-mustard-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <SocialLinks />
              <div className="w-px h-6 bg-navy-200 dark:bg-navy-700"></div>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-navy-500 dark:text-beige-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <lucide.X size={24} /> : <lucide.Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-beige-50 dark:bg-navy-900 z-40 animate-fadeIn">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xl font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-mustard-600 dark:text-mustard-400'
                      : 'text-navy-600 dark:text-beige-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <SocialLinks />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;