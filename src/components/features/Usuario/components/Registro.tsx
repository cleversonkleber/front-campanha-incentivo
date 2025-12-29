// src/components/login/Registro.tsx

import { useState, type FormEvent } from "react";
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

interface IRegistroForm{
    nome: string;
    sobreNome:string;
    email:string;
    senha:string;
    confirmaSenha:string;
}

function Registro(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState<IRegistroForm>({
            nome: '',
            sobreNome:'',
            email:'',
            senha:'',
            confirmaSenha:''
    });

    const [errors, setErrors] = useState<Partial<IRegistroForm>>({});

    const validateForm = () => {
        const newErrors: Partial<IRegistroForm> = {};
        let isValid = true; // Flag para saber se passou em tudo

        // 1. Regra: Se o nome está vazio
        if (!formData.nome.trim()) {
            newErrors.nome = 'O nome é obrigatório.'; // Adiciona o erro ao objeto
            isValid = false;
        }

        // 2. Regra: Se as senhas não batem
        if (formData.confirmaSenha !== formData.senha) {
            newErrors.confirmaSenha = 'As senhas não coincidem.';
            isValid = false;
        }

        setErrors(newErrors); // Atualiza o estado global com os erros coletados
        return isValid;       // Diz ao handleSubmit se pode prosseguir
        };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
        

        setFormData(prevFormData => ({
            ...prevFormData,
             [name]: value 
        }));
    };
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        
        if (validateForm()) {
            alert('A senha e a confirmação de senha não coincidem!');
            return;
        }

        console.log('Dados de Cadastro a Enviar:', formData);

    };

    return (

        <div className={styles.loginContainer}> 

            <form onSubmit={handleSubmit}>
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
                        className={errors.confirmaSenha ? styles.inputError : styles.inputField} 
                    />
                    {errors.confirmaSenha && <p className={styles.errorText}>{errors.confirmaSenha}</p>}
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
                {errors.confirmaSenha && <p className={styles.errorText}>{errors.confirmaSenha}</p>}
                </div>
                <button type="submit" className={styles.submitButton}>
                    Cadastrar
                </button>
            </form>
            <button 
                onClick={() => navigate('/login')}
                className={styles.buttonregister} 
                type="button"
            >
                Fazer Login
            </button>
        </div>
    );

}

export default Registro;