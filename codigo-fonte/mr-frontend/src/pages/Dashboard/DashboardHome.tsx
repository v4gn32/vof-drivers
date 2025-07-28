import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import SectionHeader from "../../components/SectionHeader";
import EvaluationCard from "../../components/EvaluationCard";
import ObjectCard from "../../components/ObjectCard";

// Sample data
const recentEvaluations = [
  {
    id: "1",
    title: "MathGenius",
    status: "rascunho" as const,
    date: "02/04/2025",
  },
  {
    id: "2",
    title: "Descobrindo o Brasil",
    status: "concluida" as const,
    date: "29/03/2025",
  },
  {
    id: "3",
    title: "Ciclo da Água",
    status: "publicada" as const,
    date: "22/03/2025",
  },
];

const recentObjects = [
  {
    id: "1",
    title: "Descobrindo o Brasil",
    type: "Jogo" as const,
    author: "João Silva",
    description:
      "Um jogo educativo sobre a história e geografia do Brasil para crianças do ensino fundamental.",
    date: "05/04/2025",
  },
  {
    id: "2",
    title: "MathGenius",
    type: "Aplicativo" as const,
    author: "João Silva",
    description:
      "Aplicativo para praticar matemática básica com desafios progressivos.",
    date: "05/04/2025",
  },
  {
    id: "3",
    title: "Ciclo da Água",
    type: "Video" as const,
    author: "João Silva",
    description: "Vídeo explicativo sobre o ciclo da água na natureza.",
    date: "05/04/2025",
  },
];

const myObjects = [
  {
    id: "1",
    title: "Descobrindo o Brasil",
    type: "Jogo" as const,
    author: "João Silva",
    description:
      "Um jogo educativo sobre a história e geografia do Brasil para crianças do ensino fundamental.",
    date: "05/04/2025",
  },
  {
    id: "2",
    title: "MathGenius",
    type: "Aplicativo" as const,
    author: "João Silva",
    description:
      "Aplicativo para praticar matemática básica com desafios progressivos.",
    date: "05/04/2025",
  },
  {
    id: "3",
    title: "Ciclo da Água",
    type: "Video" as const,
    author: "João Silva",
    description: "Vídeo explicativo sobre o ciclo da água na natureza.",
    date: "05/04/2025",
  },
];

const DashboardHome = () => {
  const navigate = useNavigate();
  const [showNewObjectModal, setShowNewObjectModal] = useState(false);

  const handleNewObject = () => {
    setShowNewObjectModal(true);
  };

  return (
    <>
      <DashboardHeader title="Dashboard" onNewObject={handleNewObject} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <SectionHeader
            title="Avaliações Recentes"
            onViewAll={() => navigate("/dashboard/avaliacoes")}
          />
          <div>
            {recentEvaluations.map((evaluation) => (
              <EvaluationCard
                key={evaluation.id}
                title={evaluation.title}
                status={evaluation.status}
                date={evaluation.date}
                onView={() =>
                  navigate(`/dashboard/avaliacoes/${evaluation.id}`)
                }
              />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader
            title="Objetos Recentes"
            onViewAll={() => navigate("/dashboard/objetos")}
          />
          <div className="space-y-4">
            {recentObjects.map((object) => (
              <div
                key={object.id}
                className="flex items-center justify-between border-b border-gray-200 pb-4"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{object.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full mr-2">
                      {object.type}
                    </span>
                    <span className="text-xs text-gray-500">
                      • Por {object.author}
                    </span>
                  </div>
                </div>
                <button
                  className="text-sm text-blue-600 font-medium"
                  onClick={() => navigate(`/dashboard/objetos/${object.id}`)}
                >
                  Avaliar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <SectionHeader
          title="Meus Objetos"
          onViewAll={() => navigate("/dashboard/meus-objetos")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myObjects.map((object) => (
            <ObjectCard
              key={object.id}
              title={object.title}
              type={object.type}
              author={object.author}
              description={object.description}
              date={object.date}
              onView={() => navigate(`/dashboard/objetos/${object.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
