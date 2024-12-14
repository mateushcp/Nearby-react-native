import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from '../components';

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const toggleSeePassword = () => setSeePassword(prev => !prev);

  return (
    <View style={styles.container}>
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
        secureTextEntry={seePassword}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
