export interface Driver {
  id: string;
  name: string;
  deviceType: 'audio' | 'network' | 'graphics' | 'storage' | 'input' | 'system' | 'other';
  currentVersion: string;
  latestVersion: string;
  status: 'updated' | 'outdated' | 'missing';
  manufacturer: string;
  releaseDate: Date;
  fileSize: number;
  description: string;
  isSelected?: boolean;
}

export interface SystemInfo {
  os: string;
  architecture: string;
  totalDrivers: number;
  updatedDrivers: number;
  outdatedDrivers: number;
  missingDrivers: number;
  lastScan: Date;
}

export interface UpdateHistory {
  id: string;
  driverName: string;
  fromVersion: string;
  toVersion: string;
  updateDate: Date;
  status: 'success' | 'failed' | 'rollback';
  fileSize: number;
}

export interface ScanProgress {
  isScanning: boolean;
  progress: number;
  currentDevice: string;
  totalDevices: number;
}