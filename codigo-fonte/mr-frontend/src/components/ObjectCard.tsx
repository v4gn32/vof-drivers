import Button from "./Button";

interface ObjectCardProps {
  title: string;
  type: "Jogo" | "Aplicativo" | "Video";
  author: string;
  description: string;
  date: string;
  onView: () => void;
}

const ObjectCard = ({
  title,
  type,
  author,
  description,
  date,
  onView,
}: ObjectCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="mb-3">
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
            {type}
          </span>
        </div>

        <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>

        <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
          <span>Por {author}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{date}</span>
          <Button variant="outline" onClick={onView}>
            Avaliar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ObjectCard;
