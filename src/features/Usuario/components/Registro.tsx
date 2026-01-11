import { useState, type FormEvent } from "react";
import styles from "./Registro.module.css";
import { useNavigate } from "react-router-dom";
import type { IRegistroForm } from "../interfaces/IRegistroForm";
import { registrarUsuario } from "../api/usuarioService";

function Registro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IRegistroForm>({
    nome: "",
    sobreNome: "",
    email: "",
    cpf: "",
    senha: "",
    telefone1: "",
    telefone2: "",
    tipoAcesso: "ROLE_USUARIO",
    confirmaSenha: "",
  });

  const [errors, setErrors] = useState<Partial<IRegistroForm>>({});

  const validateForm = () => {
    const newErrors: Partial<IRegistroForm> = {};
    let isValid = true;

    if (!formData.nome.trim()) {
      newErrors.nome = "O nome é obrigatório.";
      isValid = false;
    }

    if (formData.confirmaSenha !== formData.senha) {
      newErrors.confirmaSenha = "As senhas não coincidem.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("A senha e a confirmação de senha não coincidem!");
      return;
    }

    registrarUsuario(formData)
      .then(() => {
        alert("Usuário Cadastrado com sucesso!");
        navigate("/login");
      })
      .catch((err) => console.error("Erro API", err));
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} method="registrarUsuario">
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              value={formData.nome}
              onChange={handleInputChange}
              className={errors.nome ? styles.inputError : styles.inputField}
            />
            {errors.nome && (
              <p id="nome-error" className={styles.errorText}>
                {errors.nome}
              </p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="sobreNome">Sobrenome:</label>
            <input
              type="text"
              id="sobreNome"
              name="sobreNome"
              required
              value={formData.sobreNome}
              onChange={handleInputChange}
              className={
                errors.confirmaSenha ? styles.inputError : styles.inputField
              }
            />
            {errors.confirmaSenha && (
              <p className={styles.errorText}>{errors.confirmaSenha}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className={styles.inputField}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cpf">CPF:</label>
            <input
              type="cpf"
              id="cpf"
              name="cpf"
              required
              value={formData.cpf}
              className={styles.inputField}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telfone1">Telefone Contato:</label>
            <input
              type="telefone1"
              id="telefone1"
              name="telefone1"
              required
              value={formData.telefone1}
              className={styles.inputField}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telfone1">Segundo Telefone Contato:</label>
            <input
              type="telefone2"
              id="telefone2"
              name="telefone2"
              required
              value={formData.telefone2}
              className={styles.inputField}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              required
              value={formData.senha}
              className={styles.inputField}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmaSenha">Confirme a senha:</label>
            <input
              type="password"
              id="confirmaSenha"
              name="confirmaSenha"
              required
              value={formData.confirmaSenha}
              className={styles.inputField}
              onChange={handleInputChange}
            />
            {errors.confirmaSenha && (
              <p className={styles.errorText}>{errors.confirmaSenha}</p>
            )}
          </div>
          <button type="submit" className={styles.submitButton}>
            Cadastrar
          </button>
        </form>
        <button
          onClick={() => navigate("/login")}
          className={styles.buttonlogin}
          type="button"
        >
          Fazer Login
        </button>
      </div>
    </div>
  );
}

export default Registro;
