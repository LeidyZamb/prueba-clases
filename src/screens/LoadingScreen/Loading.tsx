import { Center } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../config/colors';
import { authStorage } from '../../storage/authStorage';
import { setAuthtentication, setUser } from '../../redux/reducers/authReducers/auth';
import { useReduxDispatch } from '../../redux';

const Loading = () => {
  const dispatch = useReduxDispatch();
 
  useEffect(() => {
    const checkAuthData = async () => {
      const authData = await authStorage.getAuthData();
      if (!authData) {
        dispatch(setAuthtentication('not-authenticated'));
        return;
      }
      dispatch(setAuthtentication('authenticated'));
      dispatch(setUser(authData));
    };
    checkAuthData();
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.LILA }}>
      <Center style={{ flex: 1 }}>
        <ActivityIndicator size='large' color={COLORS.WHITE} />
      </Center>
    </SafeAreaView>
  );
};

export default Loading;
