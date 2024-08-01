import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
    const username = useSelector(selectUsername);
    const dispatch = useDispatch();

    
    const handleClick = () => {
        dispatch(logout());
    };
    
    return (
        <div className={css.userMenu}>
            <p>Welcome, {username}</p>
            <button type="button" onClick={handleClick}>Logout</button>
        </div>
    )
};

export default UserMenu;