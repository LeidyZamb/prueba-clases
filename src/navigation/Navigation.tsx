import React from 'react';
import { HomeNavigator } from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
