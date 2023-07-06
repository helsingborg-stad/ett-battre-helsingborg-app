import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  handleClosePress(): void;
  handlePreviousPress(): void;
}

const Header: React.FC<HeaderProps> = ({ title, handleClosePress, handlePreviousPress }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePreviousPress} style={styles.closeButton}>
          <Ionicons name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handleClosePress} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  closeButton: {
    padding: 8,
  },
});

export default Header;
