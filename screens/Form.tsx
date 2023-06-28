import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { WebView } from 'react-native-webview';

import Container from '../components/common/Container';

const Form: React.FC = () => {
  return (
    <Container>
      <WebView
        originWhitelist={['*']}
        source={{
          uri: Constants.expoConfig.extra.webviewUrl,
        }}
        javaScriptEnabled
        domStorageEnabled
        geolocationEnabled
        allowFileAccess
        cacheEnabled={false}
        allowsFullscreenVideo
        style={{
          flex: 1,
          backgroundColor: 'transparent',
        }}
      />

      <StatusBar style="dark" />
    </Container>
  );
};

export default Form;
