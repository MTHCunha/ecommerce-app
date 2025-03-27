import { useEffect } from 'react';
import { setupDatabase } from './src/database/db';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  useEffect(() => {
    setupDatabase();
  }, []);

  return <AppNavigator />;
}
