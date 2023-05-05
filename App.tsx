import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <FirstScreen />
      <FlexBoxScreen /> */}
      {/* <StacksScreen /> */}
      {/* <InputsScreen/> */}
      {/* <FormScreen /> */}
      <Navigation />
    </NativeBaseProvider>

  );
};

export default App;
