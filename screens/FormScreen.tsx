import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';
import FormNavigation from '../components/screens/FormScreen/FormNavigation';
import WebView from '../components/screens/FormScreen/WebView/WebView';
import { HomeScreenNavigationProps } from '../types/Types';

const FormScreen: React.FC<HomeScreenNavigationProps> = ({ navigation }) => {
  return (
    <Container>
      <WebView url={Constants.expoConfig.extra.webviewUrl} />
      <FormNavigation navigation={navigation} />
      <SafeAreaView />
      <FocusAwareStatusBar style="dark" backgroundColor="transparent" />
    </Container>
  );
};

export default FormScreen;
