'use client';

import { useState } from 'react';
import { MoonIcon, SunIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', !isDark ? 'dark' : 'light');
  };

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">VOF-Drivers</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Sistema de Gerenciamento de Drivers</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            ) : (
              <MoonIcon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            )}
          </button>
          
          <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
            <Cog6ToothIcon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </div>
    </header>
  );
}