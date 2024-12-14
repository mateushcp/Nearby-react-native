import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, Image, View, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from '../components';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { firebaseAuth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '../components';
import { COLOR } from '../theme/constants';
import { Loading } from '../components';

const { height } = Dimensions.get('window');

GoogleSignin.configure({
  webClientId: 'autoDetect',
});

const SignInScreen: React.FC = () => {
  // const navigation = useNavigation<any>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const auth = firebaseAuth;

  const logoAnimation = useRef(new Animated.Value(-40)).current; // Posição inicial da logo
  const sheetAnimation = useRef(new Animated.Value(height)).current; // Posição inicial do BottomSheet


  const toggleSeePassword = () => setSeePassword((prev) => !prev);

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const signInResult: any = await GoogleSignin.signIn();

    let idToken = signInResult.data?.idToken;
    if (!idToken) {
      throw new Error('No ID token found');
    }

    console.log(signInResult);
  }

  const signInWithEmail = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoAnimation, {
        toValue: height * -0.37,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(sheetAnimation, {
        toValue: height * 0.1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo animada */}
      <Animated.View style={[styles.logoContainer, { transform: [{ translateY: logoAnimation }] }]}>
        <Image source={require('../assets/splashLogo.png')} style={styles.logoImage} />
      </Animated.View>

      {/* BottomSheet animado */}
      <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: sheetAnimation }] }]}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.innerSheet}>
          <Text style={styles.title}>Entre para acessar seus vídeos</Text>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            label="E-mail"
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            label="Senha"
            actionCallback={toggleSeePassword}
            actionIcon={seePassword ? 'visibility' : 'visibility-off'}
            secureTextEntry={!seePassword}
          />
          <View style={styles.buttonContainer}>
            <Button
              title='Entrar'
              onPress={() => console.log("clicou")}
            />
          </View>
          {/* Label centralizada */}
          <Text style={styles.orLabel}>Ou entre com o Google</Text>
          {/* Botão do Google centralizado */}
          <View style={styles.googleButtonContainer}>
            <GoogleSigninButton onPress={onGoogleButtonPress} />
          </View>
          {loading && <Loading visible={loading} />}
        </KeyboardAvoidingView>
      </Animated.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.orange,
  },
  logoContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.67,
    backgroundColor: COLOR.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10,
    shadowColor: COLOR.offWhite,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  innerSheet: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 8,
  },
  orLabel: {
    textAlign: 'center',
    fontSize: 14,
    color: COLOR.grey,
    marginVertical: 12, // Espaço entre os elementos
  },
  googleButtonContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
});
