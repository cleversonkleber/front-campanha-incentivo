

import './App.css';
import Login from './components/features/Usuario/components/Login';
import Register from './components/features/Usuario/components/Registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;