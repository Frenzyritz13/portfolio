import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-beige-100 dark:bg-navy-700 text-navy-500 dark:text-beige-100 
                hover:bg-beige-200 dark:hover:bg-navy-600 transition-colors duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="animate-fadeIn" />
      ) : (
        <Sun size={20} className="animate-fadeIn" />
      )}
    </button>
  );
};

export default ThemeToggle;