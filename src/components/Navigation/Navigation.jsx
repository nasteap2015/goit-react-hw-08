import { Link } from "react-router-dom";
import css from './Navigation.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.navigation}>
            <Link to="/" className={css.navigationLink}>Home</Link>
            {isLoggedIn && <Link to="/contacts" className={css.navigationLink}>Contacts</Link> }
        </nav>
    )
}

export default Navigation;
