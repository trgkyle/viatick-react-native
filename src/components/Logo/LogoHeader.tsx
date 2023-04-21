import React from 'react';
import {Image, StyleSheet} from 'react-native';

const HeaderLogo = () => {
  return <Image source={require('@assets/onenergy.png')} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    width: '50%',
    resizeMode: 'contain',
  },
});

export default HeaderLogo;
