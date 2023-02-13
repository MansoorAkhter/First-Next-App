import React, { useEffect, useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import StackNav from './src/routes/StackNav';
import AsyncStorage from '@react-native-async-storage/async-storage';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => { 
  useEffect(() => {
    SplashScreen.hide();

  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme} ref={AsyncStorage}>
        <StackNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
