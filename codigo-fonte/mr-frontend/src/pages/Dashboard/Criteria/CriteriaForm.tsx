// src/pages/Dashboard/Criteria/CriteriaForm.tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";

const CriteriaForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    axisId: "",
    weight: 1,
  });

  const [axes, setAxes] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    fetchAxes();
    if (id) fetchCriterion(id);
  }, [id]);

  const fetchAxes = async () => {
    try {
      const res = await fetch("/api/axes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error("Erro ao buscar eixos.");
      const data = await res.json();
      setAxes(data);
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar eixos de avaliação.");
    }
  };

  const fetchCriterion = async (criterionId: string) => {
    try {
      const res = await fetch(`/api/criteria/${criterionId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error("Erro ao carregar critério.");
      const data = await res.json();
      setFormData({
        name: data.name,
        description: data.description,
        axisId: data.axis_id,
        weight: data.weight,
      });
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar dados do critério.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.axisId) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const method = id ? "PUT" : "POST";
      const url = id ? `/api/criteria/${id}` : "/api/criteria";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erro ao salvar critério.");

      navigate("/dashboard/criterios");
    } catch (err) {
      console.error(err);
      setError("Erro ao salvar critério. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

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
            label="Nome do Critério"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Eixo de Avaliação
            </label>
            <select
              value={formData.axisId}
              onChange={(e) =>
                setFormData({ ...formData, axisId: e.target.value })
              }
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Selecione um eixo</option>
              {axes.map((axis) => (
                <option key={axis.id} value={axis.id}>
                  {axis.name}
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
              required
            />
          </div>

          <InputField
            id="weight"
            label="Peso"
            type="number"
            min={1}
            max={5}
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: parseInt(e.target.value, 10) })
            }
            required
          />
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard/criterios")}
          >
            Cancelar
          </Button>
          <Button type="submit" isLoading={isLoading}>
            {id ? "Atualizar Critério" : "Salvar Critério"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CriteriaForm;
