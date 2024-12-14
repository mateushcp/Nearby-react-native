import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splashLogo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Logo;
