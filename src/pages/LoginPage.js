import { Link } from 'react-router-dom';

import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="App ">
      <div className="AuthFormConteiner">
        <h1>Welcom to Todo App!</h1>
        <h2>Please LogIn</h2>
        <br></br>
        <Login />
        <p>
          Dont have any account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
