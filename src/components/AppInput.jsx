import React from 'react';
import { TextInput, StyleSheet, useColorScheme } from 'react-native';

const AppInput = ({ value, onChangeText, placeholder = "Enter password", ...rest }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <TextInput
      style={[styles.input, isDark && styles.inputDark]}
      placeholder={placeholder}
      placeholderTextColor={isDark ? '#CCCCCC' : '#9B9C96'} // Manually set placeholder color
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontFamily: 'NunitoSans-Variable',
    fontSize: 16,
    color: '#000',
  },
  inputDark: {
    borderColor: '#555',
    color: '#fff',
  },
});

export default AppInput;
