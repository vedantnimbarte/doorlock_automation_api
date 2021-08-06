import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} screen />
    </Stack.Navigator>
  );
};

export default StackNavigator;
