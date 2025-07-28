'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import SystemOverview from '@/components/dashboard/SystemOverview';
import QuickActions from '@/components/dashboard/QuickActions';
import ScanProgress from '@/components/scan/ScanProgress';
import DriverList from '@/components/scan/DriverList';
import UpdateHistory from '@/components/history/UpdateHistory';
import { mockDrivers, mockSystemInfo, mockUpdateHistory } from '@/lib/mock-data';
import { Driver, ScanProgress as ScanProgressType } from '@/lib/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [drivers, setDrivers] = useState<Driver[]>(mockDrivers);
  const [scanProgress, setScanProgress] = useState<ScanProgressType>({
    isScanning: false,
    progress: 0,
    currentDevice: '',
    totalDevices: 0
  });

  const handleScanStart = () => {
    setScanProgress({
      isScanning: true,
      progress: 0,
      currentDevice: 'Dispositivos de áudio',
      totalDevices: 6
    });

    // Simulate scanning progress
    let progress = 0;
    const devices = [
      'Dispositivos de áudio',
      'Placas de vídeo',
      'Adaptadores de rede',
      'Dispositivos de armazenamento',
      'Dispositivos de entrada',
      'Drivers do sistema'
    ];

    const interval = setInterval(() => {
      progress++;
      setScanProgress(prev => ({
        ...prev,
        progress,
        currentDevice: devices[progress - 1] || 'Finalizando...'
      }));

      if (progress >= 6) {
        clearInterval(interval);
        setTimeout(() => {
          setScanProgress(prev => ({ ...prev, isScanning: false }));
          setActiveTab('scan');
        }, 1000);
      }
    }, 800);
  };

  const handleUpdateAll = () => {
    const outdatedDrivers = drivers.filter(d => d.status !== 'updated');
    // Simulate updating all drivers
    setTimeout(() => {
      setDrivers(prev => prev.map(driver => 
        driver.status !== 'updated' 
          ? { ...driver, status: 'updated' as const, currentVersion: driver.latestVersion }
          : driver
      ));
    }, 2000);
  };

  const handleDriverUpdate = (driverId: string) => {
    setDrivers(prev => prev.map(driver => 
      driver.id === driverId 
        ? { ...driver, status: 'updated' as const, currentVersion: driver.latestVersion }
        : driver
    ));
  };

  const handleDriverSelect = (driverId: string, selected: boolean) => {
    setDrivers(prev => prev.map(driver => 
      driver.id === driverId 
        ? { ...driver, isSelected: selected }
        : driver
    ));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <SystemOverview systemInfo={mockSystemInfo} />
            <QuickActions onScanStart={handleScanStart} onUpdateAll={handleUpdateAll} />
            {scanProgress.isScanning && <ScanProgress progress={scanProgress} />}
          </div>
        );
      case 'scan':
        return (
          <div className="space-y-6">
            {scanProgress.isScanning && <ScanProgress progress={scanProgress} />}
            <DriverList 
              drivers={drivers}
              onDriverUpdate={handleDriverUpdate}
              onDriverSelect={handleDriverSelect}
            />
          </div>
        );
      case 'history':
        return <UpdateHistory history={mockUpdateHistory} />;
      case 'reports':
        return (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Relatórios do Sistema
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Funcionalidade em desenvolvimento...
            </p>
          </div>
        );
      case 'security':
        return (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Configurações de Segurança
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Funcionalidade em desenvolvimento...
            </p>
          </div>
        );
      case 'settings':
        return (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Configurações
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Funcionalidade em desenvolvimento...
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}