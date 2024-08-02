import LoginForm from "../../components/LoginForm/LoginForm";
import { selectError } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const LoginPage = () => {
    const error = useSelector(selectError);

    return (
        <div>
            <LoginForm />
            {error && (<p>Login error, please check and try again</p>)}
        </div>
    )
};

export default LoginPage;