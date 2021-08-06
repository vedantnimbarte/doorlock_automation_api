import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
