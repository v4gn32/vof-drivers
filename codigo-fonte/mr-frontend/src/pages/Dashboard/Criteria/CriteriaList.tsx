import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import Button from "../../../components/Button";
import DashboardHeader from "../../../components/DashboardHeader";

interface Criterion {
  id: string;
  name: string;
  description: string;
  axis: string;
  weight: number;
}

const CriteriaList = () => {
  const navigate = useNavigate();
  const [criteria, setCriteria] = useState<Criterion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCriteria();
  }, []);

  const fetchCriteria = async () => {
    try {
      const res = await fetch("/api/criteria", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error("Erro ao buscar critérios.");
      const data = await res.json();
      setCriteria(data);
    } catch (err) {
      console.error("Erro ao buscar critérios:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este critério?")) return;

    try {
      const res = await fetch(`/api/criteria/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) throw new Error("Erro ao excluir critério.");

      await fetchCriteria();
    } catch (err) {
      console.error("Erro ao excluir critério:", err);
      alert("Erro ao excluir critério. Tente novamente.");
    }
  };

  const handleNewCriteria = () => {
    navigate("/dashboard/criterios/novo");
  };

  return (
    <div>
      <DashboardHeader
        title="Critérios de Avaliação"
        onNewObject={handleNewCriteria}
      />

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-50 px-6 py-3">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </div>
              <div className="col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Eixo
              </div>
              <div className="col-span-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descrição
              </div>
              <div className="col-span-1 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Peso
              </div>
              <div className="col-span-1 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </div>
            </div>
          </div>

          <div className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <div className="px-6 py-4 text-center text-gray-500">
                Carregando critérios...
              </div>
            ) : criteria.length === 0 ? (
              <div className="px-6 py-4 text-center text-gray-500">
                Nenhum critério cadastrado.
              </div>
            ) : (
              criteria.map((criterion) => (
                <div key={criterion.id} className="px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <div className="text-sm font-medium text-gray-900">
                        {criterion.name}
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="text-sm text-gray-500">
                        {criterion.axis}
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="text-sm text-gray-500 truncate">
                        {criterion.description}
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <div className="text-sm text-gray-500">
                        {criterion.weight}
                      </div>
                    </div>
                    <div className="col-span-1 text-right space-x-2">
                      <button
                        onClick={() =>
                          navigate(
                            `/dashboard/criterios/${criterion.id}/editar`
                          )
                        }
                        className="text-gray-400 hover:text-blue-600"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(criterion.id)}
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

export default CriteriaList;
