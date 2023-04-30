/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const FlexBoxScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
          <Text>Box 1</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <View style={{ flex: 1, backgroundColor: 'white', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Text Box 2.1</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'skyblue', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, backgroundColor: 'blue', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text>Text Box 2.2</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'cyan', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text>Text Box 2.3</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default FlexBoxScreen;
