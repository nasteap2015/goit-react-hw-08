import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { Layout } from '../Layout/Layout';

const Homepage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user, please wait.</div>
  ) : 
  (
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo={"/login"} />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo={"/contacts"} />} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo={"/contacts"} />} />
        </Routes>
      </Layout>
  )
}

export default App;
