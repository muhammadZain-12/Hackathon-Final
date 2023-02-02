import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigation from './android/app/src/config/AppNavigation';


function App() {
  return (
      <AppNavigation/>
  );
}

export default App;
