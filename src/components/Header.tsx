import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 shadow-md z-50 bg-white dark:bg-gray-800 bg-opacity-90">
      {/* Left: Logo */}
      <Link to="/">
        <h1 className="text-lg font-bold text-black dark:text-white cursor-pointer">
          MyApp
        </h1>
      </Link>

      {/* Right: Navigation + Theme Switcher */}
      <div className="flex items-center gap-6">
        <nav className="flex gap-6 text-base font-medium text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>


        <select
          className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>

      </div>
    </header>
  );
};

export default Header;
