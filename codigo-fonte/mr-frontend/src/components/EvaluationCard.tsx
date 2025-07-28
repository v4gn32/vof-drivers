import { Eye } from 'lucide-react';

interface EvaluationCardProps {
  title: string;
  status: 'rascunho' | 'concluida' | 'publicada';
  date: string;
  onView: () => void;
}

const EvaluationCard = ({ title, status, date, onView }: EvaluationCardProps) => {
  const statusColors = {
    rascunho: 'bg-yellow-100 text-yellow-800',
    concluida: 'bg-green-100 text-green-800',
    publicada: 'bg-blue-100 text-blue-800'
  };
  
  const statusLabels = {
    rascunho: 'Rascunho',
    concluida: 'Concluída',
    publicada: 'Publicada'
  };
  
  return (
    <div className="border border-gray-200 rounded-lg bg-white mb-3 flex items-center justify-between p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="flex items-center mt-2 gap-3">
          <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
          <span className="text-xs text-gray-500">• {date}</span>
        </div>
      </div>
      
      <button
        onClick={onView}
        className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
        aria-label="Ver detalhes"
      >
        <Eye size={18} />
      </button>
    </div>
  );
};

export default EvaluationCard;