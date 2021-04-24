import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import './AppBar.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className="link"
          activeClassName="activeLink"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
