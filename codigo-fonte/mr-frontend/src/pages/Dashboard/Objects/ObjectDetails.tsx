import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useAuth } from "../../../contexts/AuthContext";

interface LearningObject {
  id: string;
  title: string;
  description: string;
  content: string;
  age_range: string;
  type: {
    name: string;
  };
  type_id: string;
}

interface EvaluationModel {
  id: string;
  name: string;
}

const ObjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [object, setObject] = useState<LearningObject | null>(null);
  const [models, setModels] = useState<EvaluationModel[]>([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) fetchObjectDetails(id);
  }, [id]);

  const fetchObjectDetails = async (objectId: string) => {
    try {
      setLoading(true);

      const objectRes = await fetch(`/api/objects/${objectId}`);
      if (!objectRes.ok) throw new Error("Erro ao buscar objeto.");

      const objectData = await objectRes.json();
      setObject(objectData);

      const modelsRes = await fetch(`/api/models/by-type/${objectData.type_id}`);
      if (!modelsRes.ok) throw new Error("Erro ao buscar modelos.");

      const modelsData = await modelsRes.json();
      setModels(modelsData);

      if (user?.id) {
        const checkRes = await fetch(`/api/evaluations/check?objectId=${objectId}&userId=${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const checkData = await checkRes.json();
        if (checkData.exists) {
          setError("Você já avaliou este objeto.");
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Erro ao carregar dados.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartEvaluation = () => {
    if (!selectedModel) {
      setError("Selecione um modelo de avaliação.");
      return;
    }

    navigate(`/dashboard/avaliacoes/${object?.id}/${selectedModel}/form`);
  };

  if (loading) return <div className="text-center py-8">Carregando...</div>;
  if (!object) return <div className="text-center text-red-500">Objeto não encontrado.</div>;

  return (
    <div className="max-w-3xl mx-auto">
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <span className="inline-block mb-2 px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
            {object.type?.name}
          </span>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {object.title}
          </h1>

          <p className="text-gray-700 mb-4">{object.description}</p>
          <p className="text-sm text-gray-500 mb-6">{object.content}</p>

          {!error && (
            <>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Iniciar Avaliação</h2>

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Modelo de Avaliação
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione um modelo</option>
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>

              <div className="flex justify-end gap-4 mt-4">
                <Button
                  variant="outline"
                  onClick={() => navigate("/dashboard/objetos")}
                >
                  Voltar
                </Button>
                <Button
                  onClick={handleStartEvaluation}
                  disabled={!selectedModel}
                >
                  Iniciar Avaliação
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ObjectDetails;
