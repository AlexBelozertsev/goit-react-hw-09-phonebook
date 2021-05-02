import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import './AppBar.scss';

import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import Clock from '../Clock';
import ColorPicker from '../ColorPicker';
import Weather from '../Weather';
import Modal from '../Modal';
import { authSelectors } from '../../redux/auth';
import { weatherSelectors } from '../../redux/weather';

export default function AppBar() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggle = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const currentCityName = useSelector(weatherSelectors.getCityName);
  const currentCityTemp = useSelector(weatherSelectors.getCityTemp);

  return (
    <>
      <header className="AppBar">
        <Navigation />
        <button type="button" className="button_weather" onClick={toggleModal}>
          {currentCityTemp ? (
            <span>
              {currentCityName} : {Math.round(currentCityTemp)}°C
            </span>
          ) : (
            <span>weather</span>
          )}
        </button>
        <button type="button" className="button_appBar" onClick={toggle}>
          <Clock />
        </button>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      {visible && <div className="menu">{<ColorPicker />}</div>}
      {showModal && (
        <Modal onClose={toggleModal}>
          <Weather />
        </Modal>
      )}
    </>
  );
}
