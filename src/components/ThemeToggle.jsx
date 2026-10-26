import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ showLabel = false, className = '' }) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center p-2 rounded-full border transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#d4ff4f] focus-visible:outline-offset-1 group ${
        isDark
          ? 'bg-white/5 hover:bg-white/10 border-white/15 text-neutral-300 hover:text-white hover:border-white/30'
          : 'bg-black/5 hover:bg-black/10 border-black/15 text-neutral-700 hover:text-black hover:border-black/30'
      } ${className}`}
      data-cursor="pointer"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun Icon for Light Mode transition */}
        <Sun
          className={`w-4 h-4 transition-all duration-500 transform ${
            isDark
              ? 'rotate-90 scale-0 opacity-0 absolute'
              : 'rotate-0 scale-100 opacity-100 text-amber-600'
          }`}
        />

        {/* Moon Icon for Dark Mode transition */}
        <Moon
          className={`w-4 h-4 transition-all duration-500 transform ${
            isDark
              ? 'rotate-0 scale-100 opacity-100 text-[#d4ff4f]'
              : '-rotate-90 scale-0 opacity-0 absolute text-neutral-400'
          }`}
        />
      </div>

      {showLabel && (
        <span className="ml-2 font-mono text-xs uppercase tracking-wider">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
}
