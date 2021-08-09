import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Home, SplashScreen} from '../screens';
import DrawerNavigtion from './drawer';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={DrawerNavigtion} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
