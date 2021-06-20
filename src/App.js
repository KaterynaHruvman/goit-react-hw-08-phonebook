import { useEffect, Suspense, lazy } from 'react';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import Section from './components/Section';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/auth/auth_operations';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() =>
  import('./components/AppBar/HomePage' /* webpackChunkName: "homePage" */),
);
const Contacts = lazy(() =>
  import('./components/Contacts' /* webpackChunkName: "contacts" */),
);
const Login = lazy(() =>
  import('./components/Login/Login' /* webpackChunkName: "Login" */),
);
const Register = lazy(() =>
  import('./components/Register/Register' /* webpackChunkName: "Register" */),
);
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <Section>
        <AppBar />

        <Suspense
          fallback={
            <p>
              <LinearProgress color="secondary" />
            </p>
          }
        >
          <Switch>
            <PublicRoute
              path="/homePage"
              restricted
              redirectTo="/Login"
              component={HomePage}
            />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={Register}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={Login}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={Contacts}
            />
          </Switch>
        </Suspense>
      </Section>
    </div>
  );
};

export default App;
