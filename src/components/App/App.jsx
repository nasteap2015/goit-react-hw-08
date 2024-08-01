import css from './App.module.css'
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Homepage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));

function App() {

  return (
    <div>
      <AppBar/>
      <Suspense>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage/>} />
        </Routes>
      </Suspense>
    </div>
    
    // <div>
    //   <h1 className={css.title}>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {loading && (<p>Loading data...</p>)}
    //   {error && (<p>{error}</p>)}
    //   <ContactList />
    // </div>
  )
}

export default App;
