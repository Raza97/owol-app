// components/Button.js
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  useColorScheme,
  ViewStyle,
} from 'react-native';

const Button = ({ title, variant = 'primary', onPress, style }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const getButtonStyle = () => {
    const base = [styles.buttonBase, style];

    if (variant === 'primary') {
      return [
        ...base,
        {
          backgroundColor: '#79B939', // green
        },
      ];
    } else {
      return [
        ...base,
        {
          backgroundColor: isDark ? '#000000' : '#FFFFFF',
          borderWidth: 1,
          borderColor: '#79B939',
        },
      ];
    }
  };

  const getTextStyle = () => {
    if (variant === 'primary') {
      return styles.primaryText;
    } else {
      return {
        color: isDark ? '#4CAF50' : '#000000',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
      };
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={getButtonStyle()}>
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    alignItems: 'center',
    marginVertical: 4,
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    fontFamily: 'NunitoSans-Variable',
    textAlign: 'center',
  },
});

export default Button;
