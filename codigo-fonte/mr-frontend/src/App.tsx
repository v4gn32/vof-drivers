import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CriteriaRoutes from "./pages/Dashboard/Criteria";
import ModelRoutes from "./pages/Dashboard/Models";
import ObjectRoutes from "./pages/Dashboard/Objects";
import EvaluationForm from "./pages/Dashboard/Evaluations/EvaluationForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard principal protegida */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <DashboardHome />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Rotas protegidas para Critérios */}
      <Route
        path="/dashboard/criterios/*"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <CriteriaRoutes />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Rotas protegidas para Modelos */}
      <Route
        path="/dashboard/modelos/*"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ModelRoutes />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Rotas protegidas para Objetos */}
      <Route
        path="/dashboard/objetos/*"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ObjectRoutes />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Rotas protegidas para Avaliações */}
      <Route
        path="/dashboard/avaliacoes/*"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <EvaluationForm objectId="algum_id" modelId="outro_id" />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
