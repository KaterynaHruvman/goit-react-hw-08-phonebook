import { useSelector } from 'react-redux';
import React from 'react';
// import ReactDOM from 'react-dom';
import AuthNav from './authNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import styles from './AppBar.module.css';
import { getIsAuthenticated } from '../../redux/auth/auth_selector';

const AppBar = () => {
  const isLoginOn = useSelector(state => getIsAuthenticated(state));
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoginOn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
