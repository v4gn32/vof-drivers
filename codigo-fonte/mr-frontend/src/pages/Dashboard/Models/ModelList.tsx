import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import Button from "../../../components/Button";
import DashboardHeader from "../../../components/DashboardHeader";

interface EvaluationModel {
  id: string;
  name: string;
  description: string;
  criteriaCount: number;
}

const ModelList = () => {
  const navigate = useNavigate();
  const [models, setModels] = useState<EvaluationModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const res = await fetch("/api/models");
      if (!res.ok) throw new Error("Erro ao buscar modelos.");

      const data = await res.json();

      // Transforma para o formato esperado
      const formatted = data.map((model: any) => ({
        id: model.id,
        name: model.name,
        description: model.description || "",
        criteriaCount: model.criteria?.length || 0,
      }));

      setModels(formatted);
    } catch (error) {
      console.error("Erro ao buscar modelos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este modelo?")) return;

    try {
      const res = await fetch(`/api/models/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Erro ao excluir modelo.");
      await fetchModels();
    } catch (error) {
      console.error("Erro ao excluir modelo:", error);
      alert("Erro ao excluir modelo. Por favor, tente novamente.");
    }
  };

  const handleNewModel = () => {
    navigate("/dashboard/modelos/novo");
  };

  return (
    <div>
      <DashboardHeader
        title="Modelos de Avaliação"
        onNewObject={handleNewModel}
      />

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-50 px-6 py-3">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </div>
              <div className="col-span-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descrição
              </div>
              <div className="col-span-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Critérios
              </div>
              <div className="col-span-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </div>
            </div>
          </div>

          <div className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <div className="px-6 py-4 text-center text-gray-500">
                Carregando modelos...
              </div>
            ) : models.length === 0 ? (
              <div className="px-6 py-4 text-center text-gray-500">
                Nenhum modelo cadastrado.
              </div>
            ) : (
              models.map((model) => (
                <div key={model.id} className="px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-4">
                      <div className="text-sm font-medium text-gray-900">
                        {model.name}
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="text-sm text-gray-500 truncate">
                        {model.description}
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <div className="text-sm text-gray-500">
                        {model.criteriaCount}
                      </div>
                    </div>
                    <div className="col-span-1 text-right space-x-2">
                      <button
                        onClick={() =>
                          navigate(`/dashboard/modelos/${model.id}/editar`)
                        }
                        className="text-gray-400 hover:text-blue-600"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(model.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelList;
