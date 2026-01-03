
import { type IRegistroForm } from '../interfaces/IRegistroForm'; 

const API_URL = 'http://localhost:3000'; 

export const registrarUsuario = async (dados: IRegistroForm) => {
  const response = await fetch(`${API_URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
   
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Erro ao realizar o cadastro.');
  }

  return response.json(); 
};