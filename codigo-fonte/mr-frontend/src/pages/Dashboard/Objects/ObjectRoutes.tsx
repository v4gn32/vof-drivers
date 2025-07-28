import { Routes, Route } from "react-router-dom";
import ObjectList from "./ObjectList";
import ObjectDetails from "./ObjectDetails";
import ObjectForm from "./ObjectForm";

const ObjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ObjectList />} />
      <Route path="/novo" element={<ObjectForm />} />
      <Route path="/:id" element={<ObjectDetails />} />
    </Routes>
  );
};

export default ObjectRoutes;
