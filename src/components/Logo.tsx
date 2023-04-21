import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => {
  return <Image source={require('@assets/onenergy.png')} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Logo;
