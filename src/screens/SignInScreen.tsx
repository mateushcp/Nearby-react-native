import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {firebaseAuth} from '../services/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Loading} from '../components';

GoogleSignin.configure({
  webClientId: 'autoDetect',
});

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const auth = firebaseAuth;

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

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

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TextInput
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        onChange={(text: any) => setEmail(text)}
      />
      <TextInput
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        onChange={(text: any) => setPassword(text)}
      />
      <Button title="Sign In" onPress={signInWithEmail} />
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
      <GoogleSigninButton onPress={onGoogleButtonPress} />
      {loading && <Loading visible={loading} />}
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
