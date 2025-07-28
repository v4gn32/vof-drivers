import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button";
import { useAuth } from "../../../contexts/AuthContext";

interface EvaluationQuestion {
  id: string;
  question: string;
  criteriaId: string;
  axis: string;
}

interface EvaluationFormProps {
  objectId: string;
  modelId: string;
}

const EvaluationForm = ({ objectId, modelId }: EvaluationFormProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState<EvaluationQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [objectDetails, setObjectDetails] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, [objectId, modelId]);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      // Buscar detalhes do objeto
      const resObj = await fetch(`/api/objects/${objectId}`);
      if (!resObj.ok) throw new Error("Erro ao buscar objeto");
      const objectData = await resObj.json();
      setObjectDetails(objectData);

      // Buscar perguntas da avaliação
      const resQuestions = await fetch(`/api/questions?modelId=${modelId}`);
      if (!resQuestions.ok) throw new Error("Erro ao buscar perguntas");
      const questionsData = await resQuestions.json();

      setQuestions(
        questionsData.map((q: any) => ({
          id: q.id,
          question: q.question,
          criteriaId: q.criteria_id,
          axis: q.axis,
        }))
      );
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
      setError("Erro ao carregar dados da avaliação.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(answers).length !== questions.length) {
      setError("Por favor, responda todas as questões.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      if (!user?.id) throw new Error("Usuário não autenticado");

      // Criação da avaliação
      const resEval = await fetch("/api/evaluations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          objectId,
          modelId,
          evaluatorId: user.id,
          status: "completed",
        }),
      });

      if (!resEval.ok) throw new Error("Erro ao salvar avaliação");
      const evaluation = await resEval.json();

      // Inserir respostas
      const answersData = Object.entries(answers).map(
        ([questionId, score]) => ({
          evaluationId: evaluation.id,
          questionId,
          score,
        })
      );

      const resAnswers = await fetch("/api/answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(answersData),
      });

      if (!resAnswers.ok) throw new Error("Erro ao salvar respostas");

      navigate("/dashboard/avaliacoes");
    } catch (err) {
      console.error("Erro ao salvar avaliação:", err);
      setError("Erro ao salvar avaliação. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-8">Carregando avaliação...</div>;
  }

  const groupedQuestions = questions.reduce((acc, question) => {
    if (!acc[question.axis]) acc[question.axis] = [];
    acc[question.axis].push(question);
    return acc;
  }, {} as Record<string, EvaluationQuestion[]>);

  return (
    <div className="max-w-3xl mx-auto">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {objectDetails && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {objectDetails.title}
          </h2>
          <p className="text-gray-600">{objectDetails.description}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {Object.entries(groupedQuestions).map(([axis, axisQuestions]) => (
          <div key={axis} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
              Eixo {axis}
            </h3>
            <div className="bg-white rounded-lg shadow-sm divide-y">
              {axisQuestions.map((question) => (
                <div key={question.id} className="p-6">
                  <p className="text-gray-900 mb-4">{question.question}</p>
                  <div className="flex items-center gap-4">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <label
                        key={value}
                        className={`
                          flex flex-col items-center gap-2 cursor-pointer
                          ${
                            answers[question.id] === value
                              ? "text-blue-600"
                              : "text-gray-600"
                          }
                        `}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={value}
                          checked={answers[question.id] === value}
                          onChange={() =>
                            handleAnswerChange(question.id, value)
                          }
                          className="sr-only"
                        />
                        <span
                          className={`
                          w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium
                          ${
                            answers[question.id] === value
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }
                        `}
                        >
                          {value}
                        </span>
                        <span className="text-sm">
                          {value === 1
                            ? "Ruim"
                            : value === 5
                            ? "Excelente"
                            : ""}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard/objetos")}
          >
            Cancelar
          </Button>
          <Button type="submit" isLoading={isLoading}>
            Enviar Avaliação
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EvaluationForm;
