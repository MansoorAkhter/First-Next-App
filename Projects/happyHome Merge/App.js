import { StatusBar, View,   I18nManager,LogBox} from 'react-native'
import React, { useEffect } from 'react'
import Navigation from './src/navigation/Navigation'
import SplashScreen from 'react-native-splash-screen'
import CustomDrawerNavigator from './src/screens/CustomDrawerNavigator'
import CustomBottomNavigator from './src/screens/CustomBottomNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import reduxStore from './src/redux/Store'

// import { enableLatestRenderer } from 'react-native-maps';
I18nManager.allowRTL(false);
I18nManager.forceRTL(false)
I18nManager.swapLeftAndRightInRTL(false);


const App = () => {
  LogBox.ignoreAllLogs()
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const { store, persistor } = reduxStore();

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#9A478D" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Navigation />
            <CustomBottomNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>

    </SafeAreaProvider>

  )
}

export default App