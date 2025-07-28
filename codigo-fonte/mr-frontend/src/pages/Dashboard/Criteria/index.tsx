import { Routes, Route } from "react-router-dom";
import CriteriaList from "./CriteriaList";
import CriteriaForm from "./CriteriaForm";

const CriteriaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CriteriaList />} />
      <Route path="/novo" element={<CriteriaForm />} />
      <Route path="/:id/editar" element={<CriteriaForm />} />
    </Routes>
  );
};

export default CriteriaRoutes;
