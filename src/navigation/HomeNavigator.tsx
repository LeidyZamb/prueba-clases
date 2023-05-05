import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamsList } from './StackParams';
import FormScreen from '../screens/FormScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator<StackParamsList>();

export const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="HomeScreen"
      component={BottomTabNavigation}
      options={{
        headerTitle: 'Home Screen',
      }}
    />
    <Stack.Screen
      name="FormScreen"
      component={FormScreen}
      options={{
        headerShown: true,
        headerTitle: 'Form Screen',
      }}
    />
  </Stack.Navigator>
);
