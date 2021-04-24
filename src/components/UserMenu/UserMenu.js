import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './defaultAvatar.png';
import style from './UserMenu.module.css';
import Button from '../Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <div className={style.container}>
      <div className={style.userContainer}>
        <img
          src={defaultAvatar}
          alt="avatar"
          width="32"
          className={style.avatar}
        />
        <span className={style.name}>{userEmail}</span>
      </div>
      <Button type={'button'} text={'Logout'} onClick={onLogout} />
    </div>
  );
}
