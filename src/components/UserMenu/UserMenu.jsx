import css from './UserMenu.module.css';

const UserMenu = () => {
    return (
        <div className={css.userMenu}>
            <p>Welcome, username</p>
            <button type="button">Logout</button>
        </div>
    )
};

export default UserMenu;