import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useWebView } from './WebView/WebViewContext';
import Button from '../../common/Button';

const Navigation: React.FC = () => {
  const { navigateNextStep, webViewRef } = useWebView();

  return (
    <View style={styles.container}>
      <Button label="Next" onPress={() => navigateNextStep(webViewRef)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default Navigation;
