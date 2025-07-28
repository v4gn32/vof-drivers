import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../contexts/AuthContext";
import {
  LayoutDashboard,
  CheckSquare,
  FileSpreadsheet,
  FolderKanban,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname.startsWith(`/dashboard${path}`);
  };

  const menuItems = [
    { label: "Dashboard", path: "", icon: <LayoutDashboard size={20} /> },
    {
      label: "Critérios Avaliação",
      path: "/criterios",
      icon: <CheckSquare size={20} />,
    },
    {
      label: "Modelos Avaliação",
      path: "/modelos",
      icon: <FileSpreadsheet size={20} />,
    },
    {
      label: "Objetos Aprendizagem",
      path: "/objetos",
      icon: <FolderKanban size={20} />,
    },
    {
      label: "Avaliações",
      path: "/avaliacoes",
      icon: <CheckSquare size={20} />,
    },
    {
      label: "Relatórios",
      path: "/relatorios",
      icon: <FileSpreadsheet size={20} />,
    },
    { label: "Usuários", path: "/usuarios", icon: <Users size={20} /> },
    {
      label: "Configurações",
      path: "/configuracoes",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div className="h-screen w-56 border-r border-gray-200 bg-white flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link to="/dashboard">
          <Logo />
        </Link>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              <Link
                to={`/dashboard${item.path}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                  isActive(item.path)
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <span className="font-medium text-sm">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.name || "Usuário"}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="p-1 text-gray-400 hover:text-gray-600"
            title="Sair"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
