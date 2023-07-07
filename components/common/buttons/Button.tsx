import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, label }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#76232F',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#75353e',
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#fff',
  },
});

export default Button;
