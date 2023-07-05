import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';
import WebView from '../components/common/WebView/WebView';

const Form: React.FC = () => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <WebView url={Constants.expoConfig.extra.webviewUrl} />
      </SafeAreaView>
      <FocusAwareStatusBar style="dark" backgroundColor="#fff" />
    </Container>
  );
};

export default Form;
