import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Header from '../components/screens/FormScreen/Header';
import { useWebView } from '../components/screens/FormScreen/WebView/WebViewContext';
import Form from '../screens/FormScreen';
import Home from '../screens/HomeScreen';
import { RootStackParamList } from '../types/Types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigator = (): JSX.Element => {
  const { reloadWebView, navigatePreviousStep, webViewRef, currentStep } = useWebView();

  console.log('currentStep: ' + currentStep);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { display: 'none' },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Form"
          component={Form}
          options={{
            title: 'Lämna synpunkt eller felanmälan',
            lazy: false, // Pre loads webview in the background. Currently not working on iOS beacuse of a bug.
            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <Header
                  title={title}
                  handleClosePress={() => {
                    reloadWebView();
                    navigation.goBack();
                  }}
                  handlePreviousPress={() => {
                    navigatePreviousStep(webViewRef);
                  }}
                  showPreviousPress={currentStep !== 0}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
