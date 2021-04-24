import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.css';

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className="link" activeClassName="activeLink">
      Signup
    </NavLink>

    <NavLink to="/login" exact className="link" activeClassName="activeLink">
      Login
    </NavLink>
  </div>
);

export default AuthNav;
