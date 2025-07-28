'use client';

import { ScanProgress as ScanProgressType } from '@/lib/types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ScanProgressProps {
  progress: ScanProgressType;
}

export default function ScanProgress({ progress }: ScanProgressProps) {
  if (!progress.isScanning) return null;

  return (
    <div className="card p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <MagnifyingGlassIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 animate-pulse" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Escaneando Sistema</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Verificando {progress.currentDevice}... ({progress.progress}/{progress.totalDevices})
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-300">Progresso</span>
          <span className="text-slate-600 dark:text-slate-300">
            {Math.round((progress.progress / progress.totalDevices) * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(progress.progress / progress.totalDevices) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}