import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeStackParamsList, StackParamsList } from './StackParams';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Icon from '../components/Icon';
import UserScreen from '../screens/UserScreen/UserScreen';
import FormScreen from '../screens/FormScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BottomTab = createBottomTabNavigator<StackParamsList>();
const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="FormScreen"
        component={FormScreen}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigation = () => (
  <BottomTab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
    }}
  >
    <BottomTab.Screen
      name="HomeScreen"
      component={HomeStack}
      options = {{
        headerShown: false,
        headerTitle: 'Home Screen',
        tabBarIcon: ({focused}) => {
          return (
            <Icon name="home-2" type={focused ? 'fill' : 'line'}/>
          );
        },
      }}/>
    <BottomTab.Screen
      name="UseScreen"
      component={UserScreen}
      options = {{
        headerTitle: 'User Screen',
        tabBarIcon: ({focused}) => {
          return (
            <Icon name="user" type={focused ? 'fill' : 'line'}/>
          );
        },
      }}
    />
  </BottomTab.Navigator>
);

export default BottomTabNavigation;
