import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import Title from '../components/Title';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const userName = useSelector(authSelectors.getUsername);

  return (
    <>
      <Title text={'Phonebook'} />
      <span>Save your contacts</span>
      {isLoggedIn ? (
        <Title text={`Welcome, ${userName}!`} />
      ) : (
        <>
          <Title text={`Welcome, guest!`} />
          <p>You should Register or Login to use the App</p>
        </>
      )}
    </>
  );
}
