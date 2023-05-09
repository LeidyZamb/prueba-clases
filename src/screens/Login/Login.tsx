import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../config/colors';
import { Button, Center } from 'native-base';
import { useReduxDispatch } from '../../redux';
import { setAuthtentication, setUser } from '../../redux/reducers/authReducers/auth';
import { User } from '../../redux/reducers/authReducers/auth.interface';
import { authStorage } from '../../storage/authStorage';

const Login = () => {
  const dispatch = useReduxDispatch();
  
  const onLogin = async () => {
    const userData: User = {
      email:'leidy@hotmail.com',
      firstname:'Leidy',
      lastname: 'Zambrano',
    };
    await authStorage.saveUser(userData);
    dispatch(setUser(userData));
    dispatch(setAuthtentication('authenticated'));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.LILA }}>
      <Center style={{ flex: 1 }}>
        <Button onPress={onLogin}>Iniciar Sesion</Button>
      </Center>
    </SafeAreaView>
  );
};

export default Login;
