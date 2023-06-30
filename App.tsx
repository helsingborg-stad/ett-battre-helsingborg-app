import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Helsingborg-Sans-Bold': require('./assets/fonts/helsingborg_sans/OTF/HelsingborgSans-Bold.otf'),
    'Helsingborg-Sans-Light': require('./assets/fonts/helsingborg_sans/OTF/HelsingborgSans-Light.otf'),
    'Helsingborg-Sans-Medium': require('./assets/fonts/helsingborg_sans/OTF/HelsingborgSans-Medium.otf'),
    'Helsingborg-Sans-Regular': require('./assets/fonts/helsingborg_sans/OTF/HelsingborgSans-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      //await new Promise((resolve) => setTimeout(resolve, 500));

      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
