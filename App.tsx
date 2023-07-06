import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import { WebViewProvider } from './components/screens/FormScreen/WebView/WebViewContext';
import AppNavigator from './navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Helsingborg-Sans-Light': require('./assets/fonts/helsingborg_sans/OTF/HelsingborgSans-Light.otf'),
    'Helsingborg-Sans-Regular': require('./assets/fonts/helsingborg_sans/OTF/HelsingborgSans-Regular.otf'),
    'Helsingborg-Sans-Medium': require('./assets/fonts/helsingborg_sans/OTF/HelsingborgSans-Medium.otf'),
    'Helsingborg-Sans-Bold': require('./assets/fonts/helsingborg_sans/OTF/HelsingborgSans-Bold.otf'),
    'Roboto-Light': require('./assets/fonts/roboto/Roboto-Light.ttf'),
    'Roboto-Regular': require('./assets/fonts/roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <WebViewProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <AppNavigator />
      </View>
    </WebViewProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
