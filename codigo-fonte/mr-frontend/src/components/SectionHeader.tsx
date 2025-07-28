interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
  onViewAll?: () => void;
}

const SectionHeader = ({ title, viewAllLink, onViewAll }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      
      {(viewAllLink || onViewAll) && (
        <button
          onClick={onViewAll}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Ver todos
        </button>
      )}
    </div>
  );
};

export default SectionHeader;