import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
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

  const showExitAlert = () => {
    Alert.alert(
      "Är du säker på att du vill avsluta?",
      "Informationen du angett kommer inte sparas.",
      [
        {
          text: "Avbryt",
          "style": "cancel"
        },
        {
          text: "OK",
          onPress: handleClosePress,
        }
      ]
    );
  }

  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          {showPreviousPress ? (
            <TouchableOpacity onPress={handlePreviousPress} style={styles.button}>
              <Ionicons name="chevron-back-outline" size={24} color="#000" />
              <Text style={styles.buttonText}>Tillbaka</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>

        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={showExitAlert} style={styles.button}>
          <Text style={styles.buttonText}>Avbryt</Text>
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
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  placeholder: {
    width: 40,
    height: 40,
    padding: 8,
  },
  backButtonContainer: {
    width: 80,
    height: 40,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
});

export default Header;
