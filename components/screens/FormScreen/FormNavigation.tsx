import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useWebView } from './WebView/WebViewContext';
import { RootStackParamList } from '../../../types/Types';
import Button from '../../common/buttons/Button';

type FormNavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Form'>;
};

const FormNavigation: React.FC<FormNavigationProps> = ({ navigation }) => {
  const { isSubmitted, reloadWebView } = useWebView();

  return (
    <View style={styles.container}>
      {isSubmitted && (
        <Button
          label="Stäng"
          onPress={() => {
            reloadWebView();
            navigation.navigate('Home');
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'transparent',
  },
});

export default FormNavigation;
