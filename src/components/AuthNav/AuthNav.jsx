import { Link } from "react-router-dom";
import css from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={css.authNavigation}>
            <Link>Register</Link>
            <Link>Login</Link>
        </div>
    )
};

export default AuthNav;