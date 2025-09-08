import React from 'react';
import { Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

const Typhography = ({ children, size = 16, style, ...rest }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <Text
      style={[
        styles.text,
        { fontSize: size, color: isDarkMode ? Colors.dark.text : Colors.light.text },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NunitoSans-Variable',
    fontWeight: 'regular',
  },
});

export default Typhography;
