import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";

interface ObjectType {
  id: string;
  name: string;
}

const ObjectForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [objectTypes, setObjectTypes] = useState<ObjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    ageRange: "",
    typeId: "",
  });

  useEffect(() => {
    fetch("/api/object-types")
      .then(res => res.json())
      .then(data => setObjectTypes(data))
      .catch(err => {
        console.error("Erro ao buscar tipos:", err);
        setError("Erro ao carregar tipos de objeto.");
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.content || !formData.ageRange || !formData.typeId) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const res = await fetch("/api/objects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          ...formData,
          created_by: user.id,
        }),
      });

      if (!res.ok) throw new Error("Erro ao salvar objeto.");
      navigate("/dashboard/objetos");
    } catch (err: any) {
      console.error("Erro:", err);
      setError(err.message || "Erro ao salvar.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      {error && <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">{error}</div>}
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        <InputField
          id="title"
          label="Título"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Objeto</label>
          <select
            value={formData.typeId}
            onChange={(e) => setFormData({ ...formData, typeId: e.target.value })}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Selecione</option>
            {objectTypes.map((type) => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>

        <InputField
          id="ageRange"
          label="Faixa Etária"
          placeholder="Ex: 7-12 anos"
          value={formData.ageRange}
          onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
        <textarea
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Conteúdo</label>
        <textarea
          rows={6}
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />

        <div className="mt-6 flex justify-end space-x-3">
          <Button type="button" variant="outline" onClick={() => navigate("/dashboard/objetos")}>
            Cancelar
          </Button>
          <Button type="submit" isLoading={isLoading}>
            Salvar Objeto
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ObjectForm;
