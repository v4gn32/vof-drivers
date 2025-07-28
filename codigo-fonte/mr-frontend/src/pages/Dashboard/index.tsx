import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import DashboardHome from './DashboardHome';
import CriteriaRoutes from './Criteria';
import ModelRoutes from './Models';
import ObjectRoutes from './Objects';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <main className="p-8">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/criterios/*" element={<CriteriaRoutes />} />
            <Route path="/modelos/*" element={<ModelRoutes />} />
            <Route path="/objetos/*" element={<ObjectRoutes />} />
            <Route path="*" element={<div>Página em construção</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard