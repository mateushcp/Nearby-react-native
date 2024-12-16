import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { images } from '../assets';

const SplashScreen: React.FC = () => {
  const scaleAnim = new Animated.Value(1);

  useEffect(() => {
    // Iniciar animação de "respirar"
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images.ballLogo}
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F58A25',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Tamanho ajustável
    height: 150,
  },
});

export default SplashScreen;
