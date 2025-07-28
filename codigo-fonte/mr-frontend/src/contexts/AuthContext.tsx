import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextProps {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Token inválido");
          return res.json();
        })
        .then((data) => {
          setUser(data.user);
          setIsAuthenticated(true);
        })
        .catch(() => {
          logout();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error || "Erro ao fazer login.");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);

    // Requisição para obter dados do usuário
    const meRes = await fetch("http://localhost:3000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    });

    if (!meRes.ok) {
      throw new Error("Erro ao buscar dados do usuário.");
    }

    const me = await meRes.json();
    setUser(me.user);
    setIsAuthenticated(true);
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message || "Erro ao registrar.");
    }

    const data = await response.json();
    setUser(data.user);
    setIsAuthenticated(true);
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
