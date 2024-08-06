import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.homePageTitle}>Welcome to ContactSafe: Your Personal Contact Keeper!</h1>
      <h2 className={css.homePageSecondTitle}>Securely Save and Organize Your Contacts</h2>
      <p className={css.homePageText}>Welcome to ContactSafe, the ultimate app for managing your contacts with ease and security. Say goodbye to losing important phone numberss. With ContactSafe, keeping track of your friends, family, and colleagues has never been simpler!</p>
      <h2 className={css.homePageSecondTitle}>Why Choose ContactSafe?</h2>
      <ul className={css.homePageList}>
        <li className={css.homePageListItem}><span className={css.homePageListSpan}>User-Friendly:</span> Designed with simplicity in mind, ContactSafe ensures a smooth experience for everyone.</li>
        <li className={css.homePageListItem}><span className={css.homePageListSpan}>Reliable:</span> Never worry about losing your contacts again with our secure backup features.</li>
        <li className={css.homePageListItem}><span className={css.homePageListSpan}>Accessible:</span> Access your contacts anytime, anywhere, from any device.</li>
      </ul>
      <p className={css.homePageText}>Join the ContactSafe community today and experience the peace of mind that comes with knowing your contacts are always safe and organized!</p>
    </div>
  );
};

export default HomePage;
