import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { COLORS } from '../config/colors';
import { VStack, Center, Text, HStack } from 'native-base';

const StacksScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <VStack>
        <Center height="1/2" width="full" background="blueGray.100">
          <Text>Box 1</Text>
        </Center>
        <HStack height="1/2">
          <Center width="1/2" background="amber.100">
            <Text>Box 2.1</Text>
          </Center>
          <Center width="1/2" background="amber.200">
            <Text>Box 2.2</Text>
          </Center>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.LILA,
  },
});

export default StacksScreen;
