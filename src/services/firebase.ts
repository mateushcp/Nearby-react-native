import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCzwBaFi-FRIPzU1O_ijI2ZSFoeTgUtkZ4',
  authDomain: 'apertai.firebaseapp.com',
  projectId: 'apertai',
  storageBucket: 'apertai.appspot.com',
  messagingSenderId: '893772993623',
  appId: '1:893772993623:web:340566c39a20ba2c42bf12',
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
