import React from 'react';
import { NativeBaseProvider } from 'native-base';
import FormScreen from './src/screens/FormScreen';

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <FirstScreen />
      <FlexBoxScreen /> */}
      {/* <StacksScreen /> */}
      {/* <InputsScreen/> */}
      <FormScreen />
    </NativeBaseProvider>

  );
};

export default App;
