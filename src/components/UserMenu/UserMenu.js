import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './defaultAvatar.png';
import './UserMenu.scss';
import Button from '../Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <div className="container">
      <div className="userContainer">
        <img src={defaultAvatar} alt="avatar" width="32" className="avatar" />
        <span className="name">{userEmail}</span>
      </div>
      <Button type={'button'} text={'Logout'} onClick={onLogout} />
    </div>
  );
}
