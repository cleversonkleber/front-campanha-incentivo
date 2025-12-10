// src/components/Login.tsx

import { useState, type FormEvent } from 'react';
import styles from './Login.module.css'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log('Login Submetido:', { email, password });
  };

  return (
    // Aplica a classe única gerada pelo módulo, ex: "Login_loginContainer__aBc12"
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
            value={email} 
            className={styles.inputField} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required
            value={password} 
            className={styles.inputField}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
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