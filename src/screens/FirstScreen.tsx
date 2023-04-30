import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import RemixIcon from 'react-native-remix-icon';
import Icon from '../components/Icon';

const FirstScreen = () => {
  return (
    <SafeAreaView>
      <Text>First Screen</Text>
      <RemixIcon name="home-fill" size="48" color="pink" />
      <Icon name="home" type="fill"/>
    </SafeAreaView>
  );
};

export default FirstScreen;
