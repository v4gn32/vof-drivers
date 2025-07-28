'use client';

import { UpdateHistory } from '@/lib/types';
import { formatDate, formatFileSize } from '@/lib/utils';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ArrowPathIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

interface UpdateHistoryProps {
  history: UpdateHistory[];
}

const statusIcons = {
  success: CheckCircleIcon,
  failed: XCircleIcon,
  rollback: ArrowPathIcon
};

const statusLabels = {
  success: 'Sucesso',
  failed: 'Falhou',
  rollback: 'Revertido'
};

const statusColors = {
  success: 'text-green-600 dark:text-green-400',
  failed: 'text-red-600 dark:text-red-400',
  rollback: 'text-yellow-600 dark:text-yellow-400'
};

export default function UpdateHistory({ history }: UpdateHistoryProps) {
  return (
    <div className="space-y-4">
      <div className="card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <ClockIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Histórico de Atualizações
          </h2>
        </div>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Registro completo de todas as atualizações de drivers realizadas
        </p>

        <div className="space-y-4">
          {history.map((item) => {
            const StatusIcon = statusIcons[item.status];
            
            return (
              <div key={item.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      {item.driverName}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400">Versão Anterior:</span>
                        <p className="font-medium text-slate-900 dark:text-white">{item.fromVersion}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400">Nova Versão:</span>
                        <p className="font-medium text-slate-900 dark:text-white">{item.toVersion}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400">Tamanho:</span>
                        <p className="font-medium text-slate-900 dark:text-white">
                          {formatFileSize(item.fileSize)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                      {formatDate(item.updateDate)}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <StatusIcon className={`w-5 h-5 ${statusColors[item.status]}`} />
                    <span className={`text-sm font-medium ${statusColors[item.status]}`}>
                      {statusLabels[item.status]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {history.length === 0 && (
          <div className="text-center py-8">
            <ClockIcon className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500 dark:text-slate-400">
              Nenhuma atualização realizada ainda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}