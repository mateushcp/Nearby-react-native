import React from 'react';
import RootRouter from './src/router/RootRouter';
import {NavigationContainer} from '@react-navigation/native';

//MAIN
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootRouter />
    </NavigationContainer>
  );
}

export default App;
