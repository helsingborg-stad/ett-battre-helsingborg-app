import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';

const Form: React.FC = () => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
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
      </SafeAreaView>
      <FocusAwareStatusBar style="dark" backgroundColor="#fff" />
    </Container>
  );
};

export default Form;
