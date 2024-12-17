import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, SignInScreen, SignUpScreen, VideoScreen} from '../screens';

export type StackParams = {
  Home: {};
  SignIn: {};
  SignUp: {};
  Video: {arena: any};
};

const RootRouter: React.FC = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  const isSignedIn = false; // Simulação de autenticação

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
