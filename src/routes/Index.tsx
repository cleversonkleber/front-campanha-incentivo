import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import Login from "../pages/login/Login";
import LayoutBase from "../components/LayoutBase";
import PerfilUsuario from "../pages/perfil/PerfilUsuario";
import Home from "../pages/home/Home";

export const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Routes>
      {/* Rota fora do menu e publico */}
      <Route path="/login" element={<Login />} />

      {/* Rota dentro do menu */}

      <Route element={user ? <LayoutBase /> : <Navigate to="'/login" />}>
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/home" element={<Home />} />
      </Route>

      {/* se não encontrar rota, redirecionar para Home ou Login*/}
      <Route path="*" element={<Navigate to={user ? "/Home" : "/login"} />} />
    </Routes>
  );
};
