import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import store from './src/redux/index';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
