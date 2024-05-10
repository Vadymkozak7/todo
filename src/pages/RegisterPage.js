import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

const RegisterPage = () => {
  return (
    <div className="App ">
      <div className="AuthFormConteiner">
        <h1>Register</h1>
        <SignUp />
        <p>
          Allready have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
