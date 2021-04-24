import React from 'react';
import { useSelector } from 'react-redux';
import './AppBar.css';

import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className="AppBar">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
