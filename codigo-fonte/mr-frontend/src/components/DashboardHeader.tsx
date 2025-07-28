import { PlusCircle } from 'lucide-react';
import Button from './Button';

interface DashboardHeaderProps {
  title: string;
  onNewObject?: () => void;
}

const DashboardHeader = ({ title, onNewObject }: DashboardHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      
      {onNewObject && (
        <Button onClick={onNewObject} className="flex items-center gap-2">
          <PlusCircle size={16} />
          Novo Objeto
        </Button>
      )}
    </div>
  );
};

export default DashboardHeader;