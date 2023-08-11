import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import IconButton from '../../../components/common/buttons/IconButton';

const ButtonSection = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <IconButton
        onPress={() => {
          navigation.navigate('Form');
        }}
        label="Lämna en felanmälan eller synpunkt"
        description="Hjälp oss att hålla staden hel och ren. Lämna din felanmälan eller synpunkt här."
        icon={<Ionicons name="add-circle-outline" size={32} color="#000" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 2,
    padding: 16,
    paddingTop: 32,
    backgroundColor: 'transparent',
  },
});

export default ButtonSection;
