import { Button, Center, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { COLORS } from '../../config/colors';
import { useReduxDispatch, useReduxSelector } from '../../redux';
import { setAuthtentication } from '../../redux/reducers/authReducers/auth';
import { authStorage } from '../../storage/authStorage';

const UserScreen = () => {
  const dispatch = useReduxDispatch();
  const { user } = useReduxSelector(state => state.auth);
  const onLogOut = async () => {
    await authStorage.removeData();
    dispatch(setAuthtentication('not-authenticated'));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.LILA }}>
      <Text>UserScreen</Text>
      <Text>{user.email}</Text>
      <Text>{`${user.firstname} ${user.lastname}`}</Text>
      <Center style={{ flex: 1 }}>
        <Button onPress={onLogOut}>Cerrar Sesion</Button>
      </Center>
    </SafeAreaView>
  );
};

export default UserScreen;
