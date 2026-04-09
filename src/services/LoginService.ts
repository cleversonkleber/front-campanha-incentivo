import type { ILoginForm } from "../interfaces/ILogin";
import { api } from "../api/api";

export const logarService = async (dados: ILoginForm) => {
  const response = await api.post("/auth/login", dados);
  if (response.data.error) {
    alert(response.data.error);
    return undefined;
  }
  return response.data;
};
