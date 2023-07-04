import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Form from '../screens/Form';
import Home from '../screens/Home';
import { RootStackParamList } from '../types/Types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const AppNavigator = (): JSX.Element => {
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
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
