import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const isAuth = false;

  return (
    <Routes>
      {isAuth}? <Route path="/" element={<HomePage />} /> :
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
