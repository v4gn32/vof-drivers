import { Driver, SystemInfo, UpdateHistory } from './types';

export const mockDrivers: Driver[] = [
  {
    id: '1',
    name: 'NVIDIA GeForce RTX 4080 Graphics Driver',
    deviceType: 'graphics',
    currentVersion: '531.29',
    latestVersion: '537.13',
    status: 'outdated',
    manufacturer: 'NVIDIA Corporation',
    releaseDate: new Date('2024-01-15'),
    fileSize: 734567424,
    description: 'Driver oficial para placas gráficas NVIDIA GeForce RTX série 40'
  },
  {
    id: '2',
    name: 'Realtek High Definition Audio Driver',
    deviceType: 'audio',
    currentVersion: '6.0.9381.1',
    latestVersion: '6.0.9381.1',
    status: 'updated',
    manufacturer: 'Realtek Semiconductor',
    releaseDate: new Date('2024-01-10'),
    fileSize: 45678912,
    description: 'Driver de áudio para dispositivos Realtek HD Audio'
  },
  {
    id: '3',
    name: 'Intel Wi-Fi 6E AX211 160MHz',
    deviceType: 'network',
    currentVersion: '22.180.0.4',
    latestVersion: '22.200.0.8',
    status: 'outdated',
    manufacturer: 'Intel Corporation',
    releaseDate: new Date('2024-01-20'),
    fileSize: 23456789,
    description: 'Driver para adaptador de rede sem fio Intel Wi-Fi 6E'
  },
  {
    id: '4',
    name: 'AMD Chipset Driver',
    deviceType: 'system',
    currentVersion: '',
    latestVersion: '5.12.0.58',
    status: 'missing',
    manufacturer: 'Advanced Micro Devices',
    releaseDate: new Date('2024-01-18'),
    fileSize: 156789123,
    description: 'Driver do chipset para processadores AMD'
  },
  {
    id: '5',
    name: 'Samsung NVMe SSD 980 PRO',
    deviceType: 'storage',
    currentVersion: '4.1.0',
    latestVersion: '4.1.0',
    status: 'updated',
    manufacturer: 'Samsung Electronics',
    releaseDate: new Date('2023-12-15'),
    fileSize: 12345678,
    description: 'Driver para SSD NVMe Samsung 980 PRO'
  },
  {
    id: '6',
    name: 'Logitech Gaming Mouse G502',
    deviceType: 'input',
    currentVersion: '8.96.88',
    latestVersion: '8.98.23',
    status: 'outdated',
    manufacturer: 'Logitech Inc.',
    releaseDate: new Date('2024-01-12'),
    fileSize: 8765432,
    description: 'Driver para mouse gamer Logitech G502'
  }
];

export const mockSystemInfo: SystemInfo = {
  os: 'Windows 11 Pro',
  architecture: 'x64',
  totalDrivers: 6,
  updatedDrivers: 2,
  outdatedDrivers: 3,
  missingDrivers: 1,
  lastScan: new Date('2024-01-25T10:30:00')
};

export const mockUpdateHistory: UpdateHistory[] = [
  {
    id: '1',
    driverName: 'NVIDIA GeForce RTX 4080 Graphics Driver',
    fromVersion: '531.18',
    toVersion: '531.29',
    updateDate: new Date('2024-01-20T14:25:00'),
    status: 'success',
    fileSize: 734567424
  },
  {
    id: '2',
    driverName: 'Intel Wi-Fi 6E AX211 160MHz',
    fromVersion: '22.170.0.2',
    toVersion: '22.180.0.4',
    updateDate: new Date('2024-01-18T09:15:00'),
    status: 'success',
    fileSize: 23456789
  },
  {
    id: '3',
    driverName: 'AMD Chipset Driver',
    fromVersion: '5.11.0.45',
    toVersion: '5.12.0.58',
    updateDate: new Date('2024-01-15T16:45:00'),
    status: 'failed',
    fileSize: 156789123
  }
];