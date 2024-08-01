import { Link } from "react-router-dom";
import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={css.navigation}>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
        </nav>
    )
}

export default Navigation;
