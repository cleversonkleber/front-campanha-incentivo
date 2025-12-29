

import { useState, type FormEvent } from "react";
import styles from './Login.module.css'; 
import { useNavigate } from 'react-router-dom';

interface ILoginForm{
    email:string;
    senha:string;
}

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ILoginForm>({
            email:'',
            senha:''
        });

  const [errors, setErrors] = useState<Partial<ILoginForm>>({});      

  const validateForm = () => {
            const newErrors: Partial<ILoginForm> = {};
            let isValid = true; 

            if (!formData.email.trim()) {
                newErrors.email = 'Email é obrigatorio!'; 
                isValid = false;
            }


            if (!formData.senha) {
                newErrors.senha = 'A senha é obrigatorio!';
                isValid = false;
            }

            setErrors(newErrors); 
            return isValid;      
    };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
     if (!validateForm()) {
            return;
        }

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
        

        setFormData(prevFormData => ({
            ...prevFormData,
             [name]: value 
        }));
    };
    
  

  return (

    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Acesso à Campanha de Incentivo</h2>
      
      <form onSubmit={handleSubmit}> 
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
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="senha">Senha:</label>
          <input 
            type="senha" 
            id="senha" 
            name="senha" 
            required
            value={formData.senha} 
            className={styles.inputField}
            onChange={handleInputChange} 
          />
        </div>
            <button 
            type='submit' 
            className={styles.submitButton} 
        >
            Entrar
        </button>
        <button 
                onClick={() => navigate('/register')} 
                className={styles.buttonregister} 
                type="button" 
            >
                Cadastrar
            </button>
      </form>
    </div>
  );
}

export default Login;