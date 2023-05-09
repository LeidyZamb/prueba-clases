import React from 'react';
import { HomeNavigator } from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useReduxSelector } from '../redux';
import { AUTH_STATUS } from '../config/common';
import Login from '../screens/Login/Login';
import Loading from '../screens/LoadingScreen/Loading';

const Navigation = () => {
  const authStatus = useReduxSelector(state => state.auth.status);
  if (authStatus === AUTH_STATUS.CHEKING) {
    return <Loading />;
  }
  
  if (authStatus === AUTH_STATUS.NOT_AUTHENTICATED) {
    return <Login />;
  }
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
