import { Routes, Route } from "react-router-dom";
import ModelList from "./ModelList";
import ModelForm from "./ModelForm";

const ModelRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ModelList />} />
      <Route path="/novo" element={<ModelForm />} />
      <Route path="/:id/editar" element={<ModelForm />} />
    </Routes>
  );
};

export default ModelRoutes;
