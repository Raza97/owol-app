import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Typhography from '../../../components/Typhography';

const AiTipsBanner = () => {
  return (
    <LinearGradient
      colors={['#f3e6fb', '#f3e6fb']} // soft purple
      style={styles.container}
    >
      {/* Background image behind the illustration */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../../../assets/images/Vector215Stroke.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
        <Image
          source={require('../../../../assets/images/ai-illustration.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Typhography style={styles.text}>
          Check out your kitchen{'\n'}
          replenishment <Text style={styles.boldText}>AI tips</Text>
        </Typhography>
      </View>

      {/* Right Arrow */}
      <Feather name="chevron-right" size={20} color="#333" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  imageWrapper: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // opacity: 0.08,
  },
  illustration: {
    width: 40,
    height: 40,
    zIndex: 1,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
});


export default AiTipsBanner;
