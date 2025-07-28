'use client';

import { useState } from 'react';
import { Driver } from '@/lib/types';
import { formatDate, formatFileSize, cn } from '@/lib/utils';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  XCircleIcon,
  ArrowDownTrayIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface DriverListProps {
  drivers: Driver[];
  onDriverUpdate: (driverId: string) => void;
  onDriverSelect: (driverId: string, selected: boolean) => void;
}

const deviceTypeLabels = {
  audio: 'Áudio',
  network: 'Rede',
  graphics: 'Gráficos',
  storage: 'Armazenamento',
  input: 'Entrada',
  system: 'Sistema',
  other: 'Outros'
};

const statusIcons = {
  updated: CheckCircleIcon,
  outdated: ExclamationTriangleIcon,
  missing: XCircleIcon
};

const statusLabels = {
  updated: 'Atualizado',
  outdated: 'Desatualizado',
  missing: 'Ausente'
};

export default function DriverList({ drivers, onDriverUpdate, onDriverSelect }: DriverListProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedDrivers, setSelectedDrivers] = useState<Set<string>>(new Set());

  const filteredDrivers = drivers.filter(driver => {
    if (filter === 'all') return true;
    if (filter === 'needs-update') return driver.status !== 'updated';
    return driver.deviceType === filter;
  });

  const handleSelectAll = () => {
    const needsUpdateDrivers = filteredDrivers.filter(d => d.status !== 'updated');
    if (selectedDrivers.size === needsUpdateDrivers.length) {
      setSelectedDrivers(new Set());
      needsUpdateDrivers.forEach(d => onDriverSelect(d.id, false));
    } else {
      const newSelected = new Set(needsUpdateDrivers.map(d => d.id));
      setSelectedDrivers(newSelected);
      needsUpdateDrivers.forEach(d => onDriverSelect(d.id, true));
    }
  };

  const handleDriverSelect = (driverId: string, selected: boolean) => {
    const newSelected = new Set(selectedDrivers);
    if (selected) {
      newSelected.add(driverId);
    } else {
      newSelected.delete(driverId);
    }
    setSelectedDrivers(newSelected);
    onDriverSelect(driverId, selected);
  };

  const needsUpdateCount = filteredDrivers.filter(d => d.status !== 'updated').length;

  return (
    <div className="space-y-4">
      <div className="card p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            >
              <option value="all">Todos os Drivers</option>
              <option value="needs-update">Precisam Atualizar</option>
              <option value="graphics">Gráficos</option>
              <option value="audio">Áudio</option>
              <option value="network">Rede</option>
              <option value="storage">Armazenamento</option>
              <option value="input">Entrada</option>
              <option value="system">Sistema</option>
            </select>
            
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {filteredDrivers.length} drivers encontrados
            </span>
          </div>

          {needsUpdateCount > 0 && (
            <div className="flex items-center space-x-3">
              <button
                onClick={handleSelectAll}
                className="btn-secondary text-sm"
              >
                {selectedDrivers.size === needsUpdateCount ? 'Desmarcar Todos' : 'Selecionar Todos'}
              </button>
              <button
                disabled={selectedDrivers.size === 0}
                className="btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Atualizar Selecionados ({selectedDrivers.size})
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {filteredDrivers.map((driver) => {
          const StatusIcon = statusIcons[driver.status];
          const canUpdate = driver.status !== 'updated';
          
          return (
            <div key={driver.id} className="card p-4">
              <div className="flex items-start space-x-4">
                {canUpdate && (
                  <input
                    type="checkbox"
                    checked={selectedDrivers.has(driver.id)}
                    onChange={(e) => handleDriverSelect(driver.id, e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                )}
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                        {driver.name}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        {driver.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="text-slate-600 dark:text-slate-300">
                          <strong>Fabricante:</strong> {driver.manufacturer}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300">
                          <strong>Tipo:</strong> {deviceTypeLabels[driver.deviceType]}
                        </span>
                        <span className="text-slate-600 dark:text-slate-300">
                          <strong>Tamanho:</strong> {formatFileSize(driver.fileSize)}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-2 text-sm">
                        <span className="text-slate-600 dark:text-slate-300">
                          <strong>Versão Atual:</strong> {driver.currentVersion || 'N/A'}
                        </span>
                        {driver.status !== 'updated' && (
                          <span className="text-slate-600 dark:text-slate-300">
                            <strong>Versão Disponível:</strong> {driver.latestVersion}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 ml-4">
                      <div className="flex items-center space-x-2">
                        <StatusIcon className={cn(
                          "w-5 h-5",
                          driver.status === 'updated' && "text-green-600 dark:text-green-400",
                          driver.status === 'outdated' && "text-yellow-600 dark:text-yellow-400",
                          driver.status === 'missing' && "text-red-600 dark:text-red-400"
                        )} />
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          driver.status === 'updated' && "status-updated",
                          driver.status === 'outdated' && "status-outdated",
                          driver.status === 'missing' && "status-missing"
                        )}>
                          {statusLabels[driver.status]}
                        </span>
                      </div>
                      
                      {canUpdate && (
                        <button
                          onClick={() => onDriverUpdate(driver.id)}
                          className="btn-primary text-sm flex items-center space-x-2"
                        >
                          <ArrowDownTrayIcon className="w-4 h-4" />
                          <span>Atualizar</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}