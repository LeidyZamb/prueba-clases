import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../../config/colors';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../navigation/StackParams';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  useEffect(() => {
    console.log('homeScreen');

    return () => {
      console.log('return homeScreen');
    };
  }, []);

  const onPress = () => {
    navigation.navigate('FormScreen');
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
