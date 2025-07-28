'use client';

import { 
  MagnifyingGlassIcon, 
  ArrowDownTrayIcon, 
  ShieldCheckIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

interface QuickActionsProps {
  onScanStart: () => void;
  onUpdateAll: () => void;
}

export default function QuickActions({ onScanStart, onUpdateAll }: QuickActionsProps) {
  const actions = [
    {
      title: 'Escanear Sistema',
      description: 'Verificar drivers desatualizados',
      icon: MagnifyingGlassIcon,
      color: 'bg-blue-600 hover:bg-blue-700',
      onClick: onScanStart
    },
    {
      title: 'Atualizar Tudo',
      description: 'Instalar todas as atualizações',
      icon: ArrowDownTrayIcon,
      color: 'bg-green-600 hover:bg-green-700',
      onClick: onUpdateAll
    },
    {
      title: 'Criar Ponto de Restauração',
      description: 'Backup antes das alterações',
      icon: ShieldCheckIcon,
      color: 'bg-purple-600 hover:bg-purple-700',
      onClick: () => {}
    },
    {
      title: 'Ver Histórico',
      description: 'Atualizações recentes',
      icon: ClockIcon,
      color: 'bg-slate-600 hover:bg-slate-700',
      onClick: () => {}
    }
  ];

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Ações Rápidas</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={action.onClick}
              className={`${action.color} text-white p-4 rounded-lg transition-colors duration-200 text-left`}
            >
              <Icon className="w-6 h-6 mb-2" />
              <h4 className="font-medium mb-1">{action.title}</h4>
              <p className="text-sm opacity-90">{action.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}