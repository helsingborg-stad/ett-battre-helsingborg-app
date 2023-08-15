import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  handleClosePress(): void;
  handlePreviousPress(): void;
  showPreviousPress?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  handleClosePress,
  handlePreviousPress,
  showPreviousPress = true,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          {showPreviousPress && (
            <TouchableOpacity onPress={handlePreviousPress} style={styles.button}>
              <Ionicons name="chevron-back-outline" size={24} color="#000" />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handleClosePress} style={styles.button}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
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
    borderBottomColor: '#8E8E8E',
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  button: {
    width: 40,
    height: 40,
    padding: 8,
  },
  backButtonContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
});

export default Header;
