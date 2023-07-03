import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onPress, label, description = '', icon }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="#fccfda" style={styles.button}>
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#FDDDE5',
    padding: 24,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: { marginRight: 16 },
  label: {
    fontFamily: 'Helsingborg-Sans-Medium',
    fontSize: 17,
    lineHeight: 25,
    letterSpacing: 0.25,
    color: '#000',
  },
  description: {
    fontSize: 14,
    lineHeight: 25,
    color: '#000',
  },
});

export default Button;
