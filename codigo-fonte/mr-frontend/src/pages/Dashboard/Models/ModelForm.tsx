import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";

interface ObjectType {
  id: string;
  name: string;
  description: string;
}

interface Criterion {
  id: string;
  name: string;
  description: string;
  axis: string;
}

interface ModelFormProps {
  onSubmit: (data: {
    name: string;
    description: string;
    objectTypeId: string;
    criteria: { id: string; weight: number }[];
  }) => Promise<void>;
}

const ModelForm = ({ onSubmit }: ModelFormProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [objectTypes, setObjectTypes] = useState<ObjectType[]>([]);
  const [availableCriteria, setAvailableCriteria] = useState<Criterion[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    objectTypeId: "",
    criteria: [] as { id: string; weight: number }[],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Tipos de objeto
        const resTypes = await fetch("/api/object-types");
        const types = await resTypes.json();
        setObjectTypes(types);

        // Critérios com eixo
        const resCriteria = await fetch("/api/criteria");
        const criteria = await resCriteria.json();
        setAvailableCriteria(criteria);

        // Dados do modelo (em edição)
        if (id) {
          const resModel = await fetch(`/api/models/${id}`);
          const model = await resModel.json();

          setFormData({
            name: model.name,
            description: model.description || "",
            objectTypeId: model.object_type_id,
            criteria: model.criteria.map((c: any) => ({
              id: c.criterion_id,
              weight: c.weight,
            })),
          });
        }
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Erro ao carregar dados. Por favor, tente novamente.");
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.objectTypeId ||
      formData.criteria.length === 0
    ) {
      setError(
        "Preencha os campos obrigatórios e selecione pelo menos um critério."
      );
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const payload = {
        name: formData.name,
        description: formData.description,
        objectTypeId: formData.objectTypeId,
        criteria: formData.criteria,
      };

      const res = await fetch(id ? `/api/models/${id}` : "/api/models", {
        method: id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erro ao salvar modelo");

      navigate("/dashboard/modelos");
    } catch (err) {
      console.error("Erro ao salvar modelo:", err);
      setError("Erro ao salvar modelo. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCriterionToggle = (criterionId: string) => {
    setFormData((prev) => {
      const exists = prev.criteria.find((c) => c.id === criterionId);
      if (exists) {
        return {
          ...prev,
          criteria: prev.criteria.filter((c) => c.id !== criterionId),
        };
      }
      return {
        ...prev,
        criteria: [...prev.criteria, { id: criterionId, weight: 1 }],
      };
    });
  };

  const criteriaByAxis = availableCriteria.reduce((acc, criterion) => {
    if (!acc[criterion.axis]) acc[criterion.axis] = [];
    acc[criterion.axis].push(criterion);
    return acc;
  }, {} as Record<string, Criterion[]>);

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-6">
          <InputField
            id="name"
            label="Nome do Modelo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Objeto de Aprendizagem
            </label>
            <select
              value={formData.objectTypeId}
              onChange={(e) =>
                setFormData({ ...formData, objectTypeId: e.target.value })
              }
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecione um tipo</option>
              {objectTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Critérios de Avaliação
            </label>
            {Object.entries(criteriaByAxis).map(([axis, criteria]) => (
              <div key={axis} className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                  Eixo {axis}
                </h3>
                <div className="border border-gray-200 rounded-md divide-y">
                  {criteria.map((criterion) => (
                    <div
                      key={criterion.id}
                      className="p-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium">{criterion.name}</div>
                        <div className="text-sm text-gray-500">
                          {criterion.description}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {formData.criteria.find(
                          (c) => c.id === criterion.id
                        ) && (
                          <input
                            type="number"
                            min={1}
                            max={5}
                            value={
                              formData.criteria.find(
                                (c) => c.id === criterion.id
                              )?.weight || 1
                            }
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                criteria: prev.criteria.map((c) =>
                                  c.id === criterion.id
                                    ? {
                                        ...c,
                                        weight: parseInt(e.target.value, 10),
                                      }
                                    : c
                                ),
                              }))
                            }
                            className="w-16 px-2 py-1 border border-gray-300 rounded-md"
                          />
                        )}
                        <Button
                          type="button"
                          variant={
                            formData.criteria.find((c) => c.id === criterion.id)
                              ? "primary"
                              : "outline"
                          }
                          onClick={() => handleCriterionToggle(criterion.id)}
                        >
                          {formData.criteria.find((c) => c.id === criterion.id)
                            ? "Selecionado"
                            : "Selecionar"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard/modelos")}
          >
            Cancelar
          </Button>
          <Button type="submit" isLoading={isLoading}>
            {id ? "Atualizar Modelo" : "Criar Modelo"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ModelForm;
