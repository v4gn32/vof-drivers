'use client';

import { SystemInfo } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { 
  ComputerDesktopIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  XCircleIcon 
} from '@heroicons/react/24/outline';

interface SystemOverviewProps {
  systemInfo: SystemInfo;
}

export default function SystemOverview({ systemInfo }: SystemOverviewProps) {
  const stats = [
    {
      label: 'Drivers Atualizados',
      value: systemInfo.updatedDrivers,
      icon: CheckCircleIcon,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      label: 'Drivers Desatualizados',
      value: systemInfo.outdatedDrivers,
      icon: ExclamationTriangleIcon,
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      label: 'Drivers Ausentes',
      value: systemInfo.missingDrivers,
      icon: XCircleIcon,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <ComputerDesktopIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Informações do Sistema</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Status atual do seu computador</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-slate-500 dark:text-slate-400">Sistema Operacional:</span>
            <p className="font-medium text-slate-900 dark:text-white">{systemInfo.os}</p>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400">Arquitetura:</span>
            <p className="font-medium text-slate-900 dark:text-white">{systemInfo.architecture}</p>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400">Total de Drivers:</span>
            <p className="font-medium text-slate-900 dark:text-white">{systemInfo.totalDrivers}</p>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400">Último Escaneamento:</span>
            <p className="font-medium text-slate-900 dark:text-white">{formatDate(systemInfo.lastScan)}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}