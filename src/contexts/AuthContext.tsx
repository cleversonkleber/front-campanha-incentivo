// contexts/AuthContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { logarService } from "../services/LoginService";
import type { ILoginForm } from "../interfaces/ILogin";
import { Navigate, useNavigate } from "react-router-dom";

interface User {
  nome: string;
  sobreNome: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (data: ILoginForm) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function signIn(formData: ILoginForm) {
    try {
      const { token } = await logarService(formData);
      if (token === undefined) return;
      localStorage.setItem("@App:token", token);
      const dummyUser = {
        nome: "Antonio",
        sobreNome: "Nunes",
        email: formData.email,
      };
      setUser(dummyUser);
      localStorage.setItem("@App:user", JSON.stringify(dummyUser));

      // api.defaults.headers.Authorization = `Bearer ${token}`;
      // Buscar Perfil do usuário
      // setUser(response.data.user);
    } catch (error) {
      console.error("Erro no login", error);
      throw error;
    }
  }

  useEffect(() => {
    async function loadStoragedData() {
      const storagedToken = localStorage.getItem("@App:token");
      const storagedUser = localStorage.getItem("@App:user");

      if (storagedToken && storagedUser) {
        // Configura o axios ou fetch com o token
        // api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
      }

      // Finaliza o estado de carregamento independente de ter achado o user ou não
      setLoading(false);
    }

    loadStoragedData();
  }, []);
  const signOut = () => {
    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:token");
    setUser(null); // Isso vai disparar o ProtectedRoute e expulsar o usuário
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
