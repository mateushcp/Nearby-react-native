import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SignInScreen, SignUpScreen} from '../screens';

export type StackParams = {
  Home: {};
  SignIn: {};
  SignUp: {};
  Video: {};
};

const RootRouter: React.FC = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  const isSignedIn = true;

  const renderRouter = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  };
  return renderRouter();
};

export default RootRouter;
