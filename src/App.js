import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { Home } from './pages/Home';

function App() {
  const isAuth = true;

  return (
    <Routes>
      {isAuth ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <Route path="/login" element={<Login />} />
      )}
    </Routes>
  );
}

export default App;
