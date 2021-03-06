import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from '../../Routes/Route.module.css';

const AuthNav = () => (
  <div>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          exact
          to="/register"
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Register
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to="/login"
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLinkActive}
        >
          Login
        </NavLink>
      </li>
    </ul>{' '}
  </div>
);
export default AuthNav;
