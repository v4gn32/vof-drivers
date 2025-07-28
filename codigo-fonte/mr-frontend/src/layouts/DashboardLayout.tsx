import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
