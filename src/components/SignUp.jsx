import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userslice';

const SignUp = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.id,
            token: user.accessToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return <Form title="register" handleClick={handleSignUp} />;
};

export default SignUp;
