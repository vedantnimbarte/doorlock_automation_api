import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Logout} from '../screens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigtion() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Users" component={Home} />
      <Drawer.Screen name="Settings" component={Home} />
      <Drawer.Screen name="Activity" component={Home} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
