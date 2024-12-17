import React, {useState, useEffect} from 'react';
import RootRouter from './src/router/RootRouter';
import SplashScreen from './src/screens/SplashScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App(): React.JSX.Element {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const queryClient = new QueryClient();

  useEffect(() => {
    // Simula a duração da Splash Screen (3 segundos)
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

  return isSplashVisible ? (
    <SplashScreen />
  ) : (
    <QueryClientProvider client={queryClient}>
      <RootRouter />
    </QueryClientProvider>
  );
}

export default App;
