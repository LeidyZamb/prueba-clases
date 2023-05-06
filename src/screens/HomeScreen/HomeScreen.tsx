import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../../config/colors';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../navigation/StackParams';
import { useReduxSelector } from '../../redux/index';
import { useDispatch } from 'react-redux';
import { setAuthtentication } from '../../redux/reducers/authReducers/auth';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
  //const { status } = useSelector((state: Store) => state.auth);
  const { status } = useReduxSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log('status: ', status);

  useEffect(() => {
    console.log('homeScreen');

    return () => {
      console.log('return homeScreen');
    };
  }, []);

  const onPress = () => {
    navigation.navigate('FormScreen');
    dispatch(setAuthtentication('not-authenticated'));
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Button onPress={onPress}>Ir a FormScreen</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.LILA,
  },
});

export default HomeScreen;
