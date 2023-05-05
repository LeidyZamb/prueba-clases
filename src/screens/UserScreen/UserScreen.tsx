import { Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { COLORS } from '../../config/colors';

const UserScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.LILA }}>
      <Text>UserScreen</Text>
    </SafeAreaView>
  );
};

export default UserScreen;
