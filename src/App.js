import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';
import api from './services/weather-api';
import { addCity } from './redux/weather/weatherActions';
import { weatherSelectors } from './redux/weather';
import { colorSelectors, colorOperations } from './redux/color';

const HomePage = lazy(() => import('./views/HomePage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

export default function App() {
  const dispatch = useDispatch();
  const initialCityName = useSelector(weatherSelectors.getCityName);
  const initialColor = useSelector(colorSelectors.getColor);
  const root = document.documentElement;

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    api.getFetch(initialCityName).then(data => {
      dispatch(addCity({ name: data.name, main: data }));
    });
  }, [dispatch, initialCityName]);

  useEffect(() => {
    root.style.setProperty(
      '--baseColor',
      colorOperations.hexToRgb(initialColor),
    );
  }, []);

  return (
    <Layout>
      <Suspense fallback={<p>Load...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Layout>
  );
}
