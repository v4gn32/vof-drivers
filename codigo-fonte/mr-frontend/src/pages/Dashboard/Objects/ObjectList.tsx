import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../../../components/DashboardHeader";
import ObjectCard from "../../../components/ObjectCard";

interface LearningObject {
  id: string;
  title: string;
  description: string;
  type: string;
  created_at: string;
  author: string;
}

const ObjectList = () => {
  const [objects, setObjects] = useState<LearningObject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/objects")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((obj: any) => ({
          id: obj.id,
          title: obj.title,
          description: obj.description,
          type: obj.learning_object_type?.name || "Desconhecido",
          created_at: obj.created_at,
          author: obj.created_by_user?.name || obj.created_by_user?.email || "Desconhecido",
        }));
        setObjects(formatted);
      })
      .catch(err => console.error("Erro ao carregar objetos:", err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <DashboardHeader title="Objetos de Aprendizagem" onNewObject={() => navigate("/dashboard/objetos/novo")} />

      {isLoading ? (
        <div className="text-center py-8">Carregando objetos...</div>
      ) : objects.length === 0 ? (
        <div className="text-center py-8 text-gray-500">Nenhum objeto cadastrado.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objects.map((obj) => (
            <ObjectCard
              key={obj.id}
              title={obj.title}
              description={obj.description}
              type={obj.type}
              author={obj.author}
              date={new Date(obj.created_at).toLocaleDateString("pt-BR")}
              onView={() => navigate(`/dashboard/objetos/${obj.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ObjectList;
