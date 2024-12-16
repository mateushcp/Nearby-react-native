import React, { useState, useEffect } from 'react';
import RootRouter from './src/router/RootRouter';
import SplashScreen from './src/screens/SplashScreen';

function App(): React.JSX.Element {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    // Simula a duração da Splash Screen (3 segundos)
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

  return isSplashVisible ? <SplashScreen /> : <RootRouter />;
}

export default App;
