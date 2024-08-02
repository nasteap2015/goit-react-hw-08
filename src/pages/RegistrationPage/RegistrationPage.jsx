import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectError } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const RegistrationPage = () => {
    const error = useSelector(selectError);

    return (
        <div>
            <RegistrationForm />
            {error && (<p>Registration failed, please try again</p>)}
        </div>
    )
};

export default RegistrationPage;