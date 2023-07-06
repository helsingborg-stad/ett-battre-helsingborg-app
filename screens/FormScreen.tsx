import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';
import Navigation from '../components/screens/FormScreen/FormNavigation';
import WebView from '../components/screens/FormScreen/WebView/WebView';

const FormScreen: React.FC = () => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <WebView url={Constants.expoConfig.extra.webviewUrl} />
        <Navigation />
      </SafeAreaView>
      <FocusAwareStatusBar style="dark" backgroundColor="#fff" />
    </Container>
  );
};

export default FormScreen;
