// components/LayoutBase.tsx
import { Outlet } from "react-router-dom";
import { Box, AppBar } from "@mui/material";
import PrimarySearchAppBar from "./ToobarCust";

export default function LayoutBase() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {PrimarySearchAppBar()}

      {/* CONTEÚDO DINÂMICO: Aqui entram as páginas (Perfil, Dashboard, etc) */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>

      {/* FOOTER FIXO */}
      <Box sx={{ p: 2, textAlign: "center", backgroundColor: "#eee" }}>
        © 2026 - Todos os direitos reservados
      </Box>
    </Box>
  );
}
