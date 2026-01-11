import { type IRegistroForm } from "../interfaces/IRegistroForm";

const API_URL = "http://localhost:8080";

export const registrarUsuario = async (
  dados: Omit<IRegistroForm, "confirmaSenha">
) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao realizar o cadastro.");
  }

  return response.json();
};
